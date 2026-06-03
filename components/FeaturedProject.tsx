'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { RAG_DEMO_URL } from '@/lib/constants';

const TECH_TAGS = ['Python', 'LangChain', 'Vector DB', 'LLM', 'Render', 'Auth'];

export default function FeaturedProject() {
  const t = useTranslations('featured');
  const answerItems = t.raw('aiAnswerItems') as string[];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a3a] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#3B5BDB] blur-[150px]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-8 flex items-center gap-3">
          <span className="mono text-[11px] font-bold tracking-widest text-[#3B5BDB] uppercase">
            — {t('sectionLabel')}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#3B5BDB] px-2 py-1 text-[10px] font-bold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            {t('inProduction')}
          </span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mono mb-4 text-[11px] text-stone-400">{t('client')}</div>
            <h2 className="mb-6 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl lg:text-7xl">
              {t('titleBefore')}{' '}
              <span className="text-[#3B5BDB]">{t('titleHighlight')}</span> {t('titleAfter')}
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-stone-300 lg:text-xl">
              {t('desc')}
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-3xl font-bold text-[#3B5BDB]">322</div>
                <div className="mono mt-1 text-[10px] tracking-widest text-stone-400 uppercase">
                  {t('pagesIndexed')}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-3xl font-bold text-[#3B5BDB]">~5s</div>
                <div className="mono mt-1 text-[10px] tracking-widest text-stone-400 uppercase">
                  {t('avgResponse')}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-3xl font-bold text-[#3B5BDB]">100%</div>
                <div className="mono mt-1 text-[10px] tracking-widest text-stone-400 uppercase">
                  {t('citedSources')}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-3xl font-bold text-[#3B5BDB]">🇨🇴</div>
                <div className="mono mt-1 text-[10px] tracking-widest text-stone-400 uppercase">
                  {t('spanishLlm')}
                </div>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="mono rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={RAG_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#3B5BDB] hover:text-white"
              >
                {t('viewDemo')}
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <Link
                href="/work/rag-pot-medellin"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
              >
                {t('seeMore')}
              </Link>
            </div>

            <div className="mt-8 max-w-xl text-xs text-stone-500 italic">{t('disclaimer')}</div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-[#3B5BDB]/20">
              <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="mono ml-2 text-[10px] text-stone-500">{t('mockWindow')}</div>
              </div>
              <div className="space-y-4 bg-white p-5">
                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-bold text-stone-600">
                    U
                  </div>
                  <div className="max-w-xs rounded-lg rounded-tl-none bg-stone-100 px-3 py-2 text-xs text-stone-800">
                    {t('userQuestion')}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3B5BDB] text-xs font-bold text-white">
                    AI
                  </div>
                  <div className="max-w-xs rounded-lg rounded-tl-none border border-[#3B5BDB]/20 bg-[#3B5BDB]/5 px-3 py-2 text-xs text-stone-800">
                    <div className="mb-2">{t('aiAnswerIntro')}</div>
                    <div className="mb-2 space-y-1 text-[11px]">
                      {answerItems.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-stone-200 pt-2 text-[10px] text-stone-500">
                      <span className="mono text-[#3B5BDB]">📄 {t('sources')}</span> p. 142, 156-158, 203
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-stone-100 pt-2">
                  <div className="flex-1 rounded border border-stone-200 bg-stone-50 px-3 py-2 text-[10px] text-stone-400">
                    {t('inputPlaceholder')}
                  </div>
                  <button
                    type="button"
                    className="rounded bg-[#3B5BDB] p-2 text-white"
                    aria-label="Send"
                  >
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mono mt-4 text-center text-[10px] text-stone-500">{t('previewNote')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
