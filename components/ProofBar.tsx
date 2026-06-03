'use client';

import { useTranslations } from 'next-intl';

const CLIENTS = ['AMVA', 'Medellín DAP', 'DEVIMED', 'Bioexplora', 'Gobernación de Antioquia'] as const;

export default function ProofBar() {
  const t = useTranslations('proof');

  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <p className="mono mb-6 text-center text-[10px] font-bold tracking-widest text-stone-500 uppercase">
          {t('label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-sm font-semibold tracking-tight text-stone-800 md:text-base"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-lg border border-stone-200 bg-white px-5 py-3 text-center">
            <div className="text-2xl font-bold text-[#3B5BDB]">12+</div>
            <div className="mono text-[10px] tracking-widest text-stone-500 uppercase">
              {t('liveDashboards')}
            </div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white px-5 py-3 text-center">
            <div className="text-2xl font-bold text-[#3B5BDB]">1</div>
            <div className="mono text-[10px] tracking-widest text-stone-500 uppercase">
              {t('ragProduction')}
            </div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white px-5 py-3 text-center">
            <div className="text-2xl font-bold text-[#3B5BDB]">3</div>
            <div className="mono text-[10px] tracking-widest text-stone-500 uppercase">
              {t('activeRoles')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
