'use client';

import { BarChart3, Cloud, Database, Map, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { CapabilityIcon, CapabilityItem } from '@/types/portfolio';

const iconMap = {
  database: Database,
  chart: BarChart3,
  map: Map,
  cloud: Cloud,
} as const;

export default function Capabilities() {
  const t = useTranslations('capabilities');
  const items = t.raw('items') as CapabilityItem[];

  return (
    <section id="capabilities" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
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

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((cap, i) => {
            const Icon = iconMap[cap.icon as CapabilityIcon];
            return (
              <div
                key={cap.tag}
                className="group rounded-xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A0A0A] hover:shadow-lg hover:shadow-stone-200/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#3B5BDB]/10 text-[#3B5BDB] transition group-hover:bg-[#3B5BDB] group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div className="mono text-[10px] font-medium tracking-widest text-stone-500 uppercase">
                    0{i + 1}
                  </div>
                </div>
                <div className="mono mb-2 text-[10px] font-semibold tracking-widest text-[#3B5BDB] uppercase">
                  {cap.tag}
                </div>
                <h3 className="mb-3 text-xl leading-tight font-semibold text-[#0A0A0A]">{cap.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-stone-600">{cap.desc}</p>
                <div className="space-y-1.5 border-t border-stone-100 pt-5">
                  {cap.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-stone-700">
                      <Zap size={11} className="shrink-0 text-[#3B5BDB]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
