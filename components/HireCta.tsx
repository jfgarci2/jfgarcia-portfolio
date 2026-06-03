'use client';

import { ArrowRight, Briefcase, Handshake } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CV_PATH, LINKEDIN_URL } from '@/lib/constants';

export default function HireCta() {
  const t = useTranslations('hire');

  return (
    <section id="hire" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
          — {t('sectionLabel')}
        </div>
        <h2 className="mb-4 max-w-3xl text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
          {t('title')}
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-stone-400">{t('sub')}</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-8">
            <Briefcase className="mb-4 text-[#3B5BDB]" size={28} />
            <h3 className="mb-2 text-xl font-semibold">{t('employmentTitle')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-stone-400">{t('employmentDesc')}</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#3B5BDB]"
            >
              {t('employmentCta')}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-8">
            <Handshake className="mb-4 text-[#3B5BDB]" size={28} />
            <h3 className="mb-2 text-xl font-semibold">{t('freelanceTitle')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-stone-400">{t('freelanceDesc')}</p>
            <a
              href="mailto:jfgarci206@gmail.com?subject=Consulting%20inquiry"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#3B5BDB]"
            >
              {t('freelanceCta')}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CV_PATH}
            download
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#3B5BDB] hover:text-white"
          >
            {t('downloadCv')}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-stone-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
          >
            {t('linkedin')}
          </a>
        </div>
      </div>
    </section>
  );
}
