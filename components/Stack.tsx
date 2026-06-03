'use client';

import { useTranslations } from 'next-intl';
import type { CertItem, StackGroup } from '@/types/portfolio';

export default function Stack() {
  const t = useTranslations('stack');
  const groups = t.raw('groups') as StackGroup[];
  const certs = t.raw('certs') as CertItem[];

  return (
    <section id="stack" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
              — {t('sectionLabel')}
            </div>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
          </div>
          <div className="flex items-end md:col-span-7 md:pl-12">
            <p className="text-lg leading-relaxed font-normal text-stone-400">{t('sub')}</p>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.name} className="mb-10 last:mb-0">
            <div className="mb-5 flex items-center gap-3 border-b border-stone-800 pb-3">
              <h3 className="text-xl font-semibold">{g.name}</h3>
              <span
                className={`mono rounded px-2 py-1 text-[10px] font-bold tracking-widest uppercase ${
                  g.tone === 'primary'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-amber-500/15 text-amber-400'
                }`}
              >
                {g.items.length} {t('tools')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className={`mono rounded-md px-4 py-2.5 text-sm font-medium transition ${
                    g.tone === 'primary'
                      ? 'bg-white text-[#0A0A0A] hover:bg-[#3B5BDB] hover:text-white'
                      : 'border border-stone-700 text-stone-300 hover:border-[#3B5BDB] hover:text-[#3B5BDB]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 border-t border-stone-800 pt-10">
          <h3 className="mb-6 text-xl font-semibold">{t('certsTitle')}</h3>
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-800 bg-stone-800 md:grid-cols-2">
            {certs.map((c) => (
              <div
                key={c.year + c.label}
                className="flex items-center justify-between bg-[#0A0A0A] p-5 transition hover:bg-stone-950"
              >
                <div className="flex items-center gap-4">
                  <div className="mono text-2xl font-bold text-[#3B5BDB]">{c.year}</div>
                  <div className="text-sm font-semibold">{c.label}</div>
                </div>
                <span
                  className={`mono rounded px-2 py-1 text-[10px] font-bold uppercase ${
                    c.variant === 'inProgress'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}
                >
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
