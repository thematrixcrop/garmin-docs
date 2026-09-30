#!/usr/bin/env python3
"""Local English -> Chinese translation engine (offline, CPU).

Reads newline-delimited JSON from stdin ({"id": <any>, "text": "..."}) and
writes {"id": <any>, "target": "..."} to stdout, one per input, in order.

Two engines are supported:

  nllb    NLLB-200 (distilled) converted to CTranslate2 — much stronger on
          Chinese than opus-mt and the default. Needs a tokenizer.json.
  marian  Helsinki-NLP opus-mt-en-zh converted to CTranslate2, sentencepiece.

Both run fully offline, so the whole documentation set can be translated
without an external API. Model weights come from pipeline/mt/fetch-model.py.

    python3 pipeline/mt/translate.py --engine nllb --model ~/.cache/garmin-docs-mt/nllb-200-distilled-600M-ct2-int8
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

MODEL_ROOT = Path.home() / ".cache/garmin-docs-mt"
DEFAULT_MODELS = {
    "nllb": MODEL_ROOT / "nllb-200-distilled-600M-ct2-int8",
    "marian": MODEL_ROOT / "opus-mt-en-zh-ct2",
}


def load_nllb(model_dir: Path):
    """NLLB tokenisation: a source-language token prefixes the input and the
    target-language token is used as a decoding prefix."""
    from tokenizers import Tokenizer

    if not (model_dir / "model.bin").exists() or not (model_dir / "tokenizer.json").exists():
        sys.exit(f"model not found at {model_dir}\nRun: python3 pipeline/mt/fetch-model.py")

    tokenizer = Tokenizer.from_file(str(model_dir / "tokenizer.json"))

    def encode(text: str, src_lang: str) -> list[str]:
        return [src_lang, *tokenizer.encode(text).tokens]

    def decode(tokens: list[str], tgt_lang: str) -> str:
        if tokens and tokens[0] == tgt_lang:
            tokens = tokens[1:]
        ids = [i for i in (tokenizer.token_to_id(t) for t in tokens) if i is not None]
        return tokenizer.decode(ids, skip_special_tokens=True)

    return tokenizer, encode, decode


def load_marian(model_dir: Path):
    """opus-mt tokenisation via sentencepiece, with a target-language token."""
    import sentencepiece as spm

    if not (model_dir / "model.bin").exists():
        sys.exit(f"model not found at {model_dir}\nRun: python3 pipeline/mt/fetch-model.py")

    source = spm.SentencePieceProcessor(str(model_dir / "source.spm"))
    target = spm.SentencePieceProcessor(str(model_dir / "target.spm"))
    target_token = ">>cmn_Hans<<"

    def encode(text: str, _src_lang: str) -> list[str]:
        return [target_token, *source.encode(text, out_type=str)]

    def decode(tokens: list[str], _tgt_lang: str) -> str:
        if tokens and tokens[0] == target_token:
            tokens = tokens[1:]
        return target.decode(tokens)

    return source, encode, decode


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--engine", choices=["nllb", "marian"], default="nllb")
    parser.add_argument("--model", default=None)
    parser.add_argument("--compute-type", default="int8")
    parser.add_argument("--beam-size", type=int, default=2)
    parser.add_argument("--src-lang", default="eng_Latn")
    parser.add_argument("--tgt-lang", default="zho_Hans")
    parser.add_argument("--batch-size", type=int, default=48)
    parser.add_argument("--threads", type=int, default=max(1, (os.cpu_count() or 4) - 2))
    args = parser.parse_args()

    model_dir = Path(args.model) if args.model else DEFAULT_MODELS[args.engine]

    import ctranslate2

    translator = ctranslate2.Translator(
        str(model_dir),
        device="cpu",
        compute_type=args.compute_type,
        inter_threads=1,
        intra_threads=args.threads,
    )
    _, encode, decode = load_nllb(model_dir) if args.engine == "nllb" else load_marian(model_dir)

    batch: list[dict] = []

    def flush() -> None:
        if not batch:
            return
        tokenized = [encode(item["text"], args.src_lang) for item in batch]
        results = translator.translate_batch(
            tokenized,
            target_prefix=[[args.tgt_lang]] * len(batch),
            beam_size=args.beam_size,
            max_batch_size=len(batch),
            replace_unknowns=True,
        )
        for item, result in zip(batch, results):
            sys.stdout.write(
                json.dumps(
                    {"id": item["id"], "target": decode(result.hypotheses[0], args.tgt_lang)},
                    ensure_ascii=False,
                )
                + "\n"
            )
        sys.stdout.flush()
        batch.clear()

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        batch.append(json.loads(line))
        if len(batch) >= args.batch_size:
            flush()

    flush()


if __name__ == "__main__":
    main()
