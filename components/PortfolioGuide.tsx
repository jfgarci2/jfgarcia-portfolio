'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const LINKS = [
  { href: '/work/amva', key: 'amva' },
  { href: '/work/medellin-dap', key: 'dap' },
  { href: '/work/rag-pot-medellin', key: 'rag' },
] as const;

export default function PortfolioGuide() {
  const t = useTranslations('guide');

  return (
    <section className="border-y border-stone-200 bg-stone-50/80">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <p className="mono mb-4 text-[10px] font-bold tracking-widest text-[#3B5BDB] uppercase">
          {t('label')}
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-stone-600">{t('sub')}</p>
          <div className="flex flex-wrap gap-2">
            {LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
              >
                {t(key)}
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
