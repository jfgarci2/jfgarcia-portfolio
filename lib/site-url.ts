/** Production default when NEXT_PUBLIC_SITE_URL is unset (e.g. first Vercel deploy). */
export const PRODUCTION_SITE_URL = 'https://jfgarcia-portfolio.vercel.app';

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, '');
  return PRODUCTION_SITE_URL;
}
