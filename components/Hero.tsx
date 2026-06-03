'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { StatItem } from '@/types/portfolio';

const TARGETS = { projects: 150, years: 20, analytics: 6, specs: 3 } as const;

export default function Hero() {
  const t = useTranslations('hero');
  const stats = t.raw('stats') as StatItem[];
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    analytics: 0,
    specs: 0,
  });

  useEffect(() => {
    const duration = 1800;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        projects: Math.floor(TARGETS.projects * ease),
        years: Math.floor(TARGETS.years * ease),
        analytics: Math.floor(TARGETS.analytics * ease),
        specs: Math.floor(TARGETS.specs * ease),
      });
      if (progress >= 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 85% -20%, rgba(59, 91, 219, 0.14), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(15, 118, 110, 0.1), transparent 50%)',
        }}
      />
      <header className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-32">
      <div className="anim-1 mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-emerald-700">{t('status')}</span>
      </div>

      <div className="anim-2 mono mb-3 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
        {t('pre')}
      </div>
      <p className="anim-2 mono mb-6 text-[11px] tracking-widest text-stone-500 uppercase">
        {t('skills')}
      </p>

      <h1 className="max-w-6xl text-5xl leading-[1.0] font-semibold tracking-[-0.03em] text-[#0A0A0A] md:text-7xl lg:text-[5.5rem]">
        <span className="anim-2 block">{t('line1')}</span>
        <span className="anim-3 block">
          {t('line2')} <span className="text-[#3B5BDB]">{t('line3')}</span>
        </span>
        <span className="anim-4 block text-stone-400">{t('line4')}</span>
      </h1>

      <p className="anim-5 mt-10 max-w-2xl text-lg leading-relaxed font-normal text-stone-600 md:text-xl">
        {t('sub')}
      </p>

      <div className="anim-5 mt-10 flex flex-wrap gap-3">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-md bg-[#0A0A0A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3B5BDB]"
        >
          {t('ctaPrimary')}
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-900 transition hover:border-[#0A0A0A] hover:bg-stone-50"
        >
          {t('ctaSecondary')}
        </a>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.key}
            className="bg-white p-6 transition group-hover:bg-stone-50 lg:p-8"
          >
            <div className="flex items-baseline text-5xl font-bold tracking-tight text-[#0A0A0A] lg:text-6xl">
              {counts[s.key]}
              <span className="text-[#3B5BDB]">{s.sym}</span>
            </div>
            <div className="mt-3 text-sm font-semibold text-stone-900">{s.label}</div>
            <div className="mt-1 text-xs text-stone-500">{s.desc}</div>
          </div>
        ))}
      </div>
    </header>
    </section>
  );
}
