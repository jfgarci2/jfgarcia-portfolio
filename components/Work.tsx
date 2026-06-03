'use client';

import { useState } from 'react';
import { Award, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';
import WorkCard from '@/components/WorkCard';
import type { WorkFilter, WorkItem, WorkTag } from '@/types/portfolio';

export default function Work() {
  const t = useTranslations('work');
  const filters = t.raw('filters') as WorkFilter[];
  const items = t.raw('items') as WorkItem[];
  const [filter, setFilter] = useState<'all' | WorkTag>('all');

  const filteredWork =
    filter === 'all' ? items : items.filter((item) => item.tags.includes(filter));

  const filterLabel = (tag: WorkTag) =>
    filters.find((f) => f.id === tag)?.label ?? tag;

  return (
    <section id="work" className="bg-white">
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
            <p className="text-lg leading-relaxed font-normal text-stone-600">{t('sub')}</p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f.id
                  ? 'bg-[#0A0A0A] text-white'
                  : 'border border-stone-300 bg-white text-stone-700 hover:border-[#0A0A0A]'
              }`}
            >
              {f.label}
              {filter === f.id && (
                <span className="mono ml-2 text-[10px] opacity-70">{filteredWork.length}</span>
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredWork.map((item) => (
            <WorkCard key={item.id} item={item} filterLabel={filterLabel} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Award size={14} className="text-[#3B5BDB]" />
              <div className="mono text-[10px] font-bold tracking-widest text-[#3B5BDB] uppercase">
                {t('transparencyTitle')}
              </div>
            </div>
            <div className="text-sm leading-relaxed text-stone-700">{t('transparencyDesc')}</div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-stone-300 bg-stone-50/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Layers size={14} className="text-emerald-600" />
              <div className="mono text-[10px] font-bold tracking-widest text-emerald-700 uppercase">
                {t('comingTitle')}
              </div>
            </div>
            <div className="text-sm leading-relaxed text-stone-700">{t('comingDesc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
