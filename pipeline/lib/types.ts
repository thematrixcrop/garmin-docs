import type { ContentSource } from '../config';

export type PageKind = 'gatsby' | 'apidoc';

export interface ManifestEntry {
  /** Absolute source URL. */
  url: string;
  /** Canonical route inside the mirror, always with a trailing slash. */
  path: string;
  kind: PageKind;
  /** Where the body text comes from. */
  source: ContentSource;
  /** First path segment, e.g. `connect-iq`. */
  section: string;
  title: string;
  /** Gatsby componentChunkName, for diagnostics. */
  component?: string;
  /** Path (relative to ARTICLE_PREFIX) of the DITA article HTML, when present. */
  articleFile?: string;
}

export interface SidebarLink {
  /** Canonical route of the linked page. */
  path: string;
  /** Label text as shown in the source sidebar. */
  label: string;
  /** Nesting depth (0 = top level). */
  depth: number;
}

export interface ExtractedPage {
  url: string;
  path: string;
  kind: PageKind;
  title: string;
  /** Cleaned content HTML, ready for the Markdown converter. */
  html: string;
  /** Plain-text length of the extracted body, for stub detection. */
  chars: number;
  /** True when the page had no extractable body (client-rendered / empty). */
  stub: boolean;
  /** Document-order links harvested from the source doc sidebar. */
  sidebar: SidebarLink[];
}

export interface ConvertedPage {
  url: string;
  path: string;
  kind: PageKind;
  title: string;
  /** Final Markdown body (without frontmatter). */
  markdown: string;
}
