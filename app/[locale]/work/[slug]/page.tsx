import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CaseStudyView from '@/components/CaseStudyView';
import { isCaseStudySlug, getCaseStudyStaticParams } from '@/lib/work';
import type { Locale } from '@/i18n/routing';
import type { ProjectSlug } from '@/config/projects';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudyStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isCaseStudySlug(slug)) {
    return { title: 'Not found' };
  }

  const t = await getTranslations({ locale, namespace: 'caseStudies' });
  const description = t(`${slug}.summary`);

  return {
    title: t(`${slug}.title`),
    description,
    openGraph: {
      title: t(`${slug}.title`),
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  return <CaseStudyView slug={slug as ProjectSlug} />;
}
