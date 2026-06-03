'use client';

import { ArrowUpRight, Database } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { GITHUB_URL, OPEN_DATA_DEMO_URL, RAG_DEMO_URL } from '@/lib/constants';

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
          <div className="rounded-xl border border-stone-200 bg-white p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#3B5BDB]/10 text-[#3B5BDB]">
              <Database size={20} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#0A0A0A]">{t('openDataTitle')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-stone-600">{t('openDataDesc')}</p>
            {OPEN_DATA_DEMO_URL ? (
              <a
                href={OPEN_DATA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3B5BDB]"
              >
                {t('openDataCta')}
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <>
                <Link
                  href="/demos/open-data"
                  className="group mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#3B5BDB]"
                >
                  {t('openDataCta')}
                  <ArrowUpRight size={16} />
                </Link>
                <p className="text-xs text-stone-500">{t('openDataSoon')}</p>
              </>
            )}
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-7">
            <div className="mono mb-2 text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
              RAG · LLM
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#0A0A0A]">{t('ragTitle')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-stone-600">{t('ragDesc')}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={RAG_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3B5BDB]"
              >
                {t('ragCta')}
                <ArrowUpRight size={16} />
              </a>
              <Link
                href="/work/rag-pot-medellin"
                className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-[#0A0A0A] hover:underline"
              >
                {t('caseStudyLink')}
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-[#0A0A0A] hover:underline"
              >
                {t('githubCta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
