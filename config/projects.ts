export type ProjectSlug =
  | 'vertex-rd'
  | 'medellin-cadastral'
  | 'amva'
  | 'medellin-dap'
  | 'rag-pot-medellin'
  | 'devimed'
  | 'bioexplora'
  | 'iatech'
  | 'antioquia'
  | 'open-data-colombia';

export const PROJECT_SLUGS: ProjectSlug[] = [
  'vertex-rd',
  'medellin-cadastral',
  'amva',
  'medellin-dap',
  'rag-pot-medellin',
  'devimed',
  'bioexplora',
  'iatech',
  'antioquia',
  'open-data-colombia',
];

export const WORK_ID_TO_SLUG: Record<string, ProjectSlug> = {
  '01': 'vertex-rd',
  '02': 'medellin-cadastral',
  '03': 'amva',
  '04': 'medellin-dap',
  '05': 'rag-pot-medellin',
  '06': 'devimed',
  '07': 'bioexplora',
  '08': 'iatech',
  '09': 'antioquia',
};

export const CASE_STUDY_SLUGS: ProjectSlug[] = [
  'vertex-rd',
  'medellin-cadastral',
  'amva',
  'medellin-dap',
  'rag-pot-medellin',
];

/** Work cards without public dashboards — GIS, geodatabases, SQL, Python. */
export const GIS_DATA_SLUGS: ProjectSlug[] = ['devimed', 'bioexplora', 'antioquia'];

export function isGisDataSlug(slug: string): slug is (typeof GIS_DATA_SLUGS)[number] {
  return GIS_DATA_SLUGS.includes(slug as ProjectSlug);
}

export function workImagePath(slug: ProjectSlug): string {
  return `/work/${slug}.webp`;
}

/** Case study banner — prefers `-hero.webp` when present (no upscaling in UI). */
export function caseStudyHeroPath(slug: ProjectSlug): string {
  return `/work/${slug}-hero.webp`;
}
