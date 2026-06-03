'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LINKEDIN_URL } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-stone-800 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center lg:px-10">
        <div className="flex items-center gap-3 text-xs text-stone-500">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-[10px] font-bold text-[#0A0A0A]">
            JG
          </div>
          <span>© 2026 José Fernando García Pérez · {t('rights')}</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-xs font-medium text-stone-400 transition hover:text-[#3B5BDB]"
          >
            {t('linkedin')}
            <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="mono flex items-center gap-2 text-[10px] tracking-widest text-stone-500 uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {t('available')}
          </div>
        </div>
      </div>
    </footer>
  );
}
