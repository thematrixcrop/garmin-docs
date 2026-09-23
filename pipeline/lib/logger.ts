export const log = {
  info(msg: string) {
    console.log(`\x1b[36m[info]\x1b[0m ${msg}`);
  },
  step(msg: string) {
    console.log(`\n\x1b[1;35m▶ ${msg}\x1b[0m`);
  },
  ok(msg: string) {
    console.log(`\x1b[32m[ok]\x1b[0m ${msg}`);
  },
  warn(msg: string) {
    console.warn(`\x1b[33m[warn]\x1b[0m ${msg}`);
  },
  error(msg: string) {
    console.error(`\x1b[31m[error]\x1b[0m ${msg}`);
  },
};
