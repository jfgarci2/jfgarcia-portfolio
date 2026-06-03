import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { CASE_STUDY_SLUGS } from '@/config/projects';

function localePath(locale: string, path: string): string {
  if (locale === routing.defaultLocale) {
    return path || '/';
  }
  return `/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${baseUrl}${localePath(locale, '')}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    });

    for (const slug of CASE_STUDY_SLUGS) {
      entries.push({
        url: `${baseUrl}${localePath(locale, `/work/${slug}`)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }

    entries.push({
      url: `${baseUrl}${localePath(locale, '/demos/open-data')}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
