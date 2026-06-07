'use client';

import { ArrowUpRight, Database, Globe, Leaf, Map } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  AMVA_DASHBOARD_URL,
  AMVA_GITHUB_URL,
  AMVA_REPORT_PDF_URL,
  GITHUB_URL,
  MEDELLIN_CADASTRAL_DEMO_URL,
  MEDELLIN_CADASTRAL_GITHUB_URL,
  RAG_DEMO_URL,
  VERTEX_RD_DEMO_URL,
  VERTEX_RD_GITHUB_URL,
} from '@/lib/constants';

type DemoCard = {
  icon: typeof Globe;
  titleKey: string;
  descKey: string;
  demoUrl: string;
  codeUrl?: string;
  reportUrl?: string;
  caseStudyHref?: string;
  accent?: string;
};

const DEMO_CARDS: DemoCard[] = [
  {
    icon: Globe,
    titleKey: 'vertexTitle',
    descKey: 'vertexDesc',
    demoUrl: VERTEX_RD_DEMO_URL,
    codeUrl: VERTEX_RD_GITHUB_URL,
    caseStudyHref: '/work/vertex-rd',
    accent: 'text-[#3B5BDB]',
  },
  {
    icon: Map,
    titleKey: 'cadastralTitle',
    descKey: 'cadastralDesc',
    demoUrl: MEDELLIN_CADASTRAL_DEMO_URL,
    codeUrl: MEDELLIN_CADASTRAL_GITHUB_URL,
    caseStudyHref: '/work/medellin-cadastral',
    accent: 'text-emerald-600',
  },
  {
    icon: Leaf,
    titleKey: 'amvaTitle',
    descKey: 'amvaDesc',
    demoUrl: AMVA_DASHBOARD_URL,
    codeUrl: AMVA_GITHUB_URL,
    reportUrl: AMVA_REPORT_PDF_URL,
    caseStudyHref: '/work/amva',
    accent: 'text-teal-600',
  },
  {
    icon: Database,
    titleKey: 'ragTitle',
    descKey: 'ragDesc',
    demoUrl: RAG_DEMO_URL,
    caseStudyHref: '/work/rag-pot-medellin',
    accent: 'text-violet-600',
  },
];

export default function Demos() {
  const t = useTranslations('demos');

  return (
    <section id="demos" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
              — {t('sectionLabel')}
            </div>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
          </div>
          <div className="flex items-end md:col-span-7 md:pl-12">
            <p className="text-lg leading-relaxed text-stone-600">{t('sub')}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {DEMO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.titleKey} className="rounded-xl border border-stone-200 bg-white p-7">
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-stone-100 ${card.accent ?? 'text-[#3B5BDB]'}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0A0A0A]">{t(card.titleKey)}</h3>
                <p className="mb-6 text-sm leading-relaxed text-stone-600">{t(card.descKey)}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={card.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3B5BDB]"
                  >
                    {t('demoCta')}
                    <ArrowUpRight size={16} />
                  </a>
                  {card.codeUrl && (
                    <a
                      href={card.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-[#0A0A0A] hover:underline"
                    >
                      {t('codeCta')}
                    </a>
                  )}
                  {card.reportUrl && (
                    <a
                      href={card.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-[#0A0A0A] hover:underline"
                    >
                      {t('reportCta')}
                    </a>
                  )}
                  {card.caseStudyHref && (
                    <Link
                      href={card.caseStudyHref}
                      className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-[#0A0A0A] hover:underline"
                    >
                      {t('caseStudyLink')}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mono inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-stone-500 uppercase hover:text-[#3B5BDB]"
          >
            {t('githubCta')}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
