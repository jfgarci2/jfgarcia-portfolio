import {
  CASE_STUDY_SLUGS,
  WORK_ID_TO_SLUG,
  type ProjectSlug,
} from '@/config/projects';

export function slugFromWorkId(workId: string): ProjectSlug | undefined {
  return WORK_ID_TO_SLUG[workId];
}

export function isCaseStudySlug(slug: string): slug is ProjectSlug {
  return CASE_STUDY_SLUGS.includes(slug as ProjectSlug);
}

export function getCaseStudyStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}
