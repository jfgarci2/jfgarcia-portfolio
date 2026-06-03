'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#3B5BDB] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mono mb-6 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
          — {t('sectionLabel')}
        </div>
        <h2 className="mb-8 max-w-5xl text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-7xl lg:text-9xl">
          {t('title')}
        </h2>
        <p className="mb-16 max-w-3xl text-xl leading-relaxed font-normal text-stone-400 md:text-2xl">
          {t('sub')}
        </p>

        <div className="grid max-w-4xl gap-3 md:grid-cols-2">
          <a
            href={`mailto:${t('email')}`}
            className="group rounded-xl bg-white p-6 text-[#0A0A0A] transition hover:bg-[#3B5BDB] hover:text-white"
          >
            <div className="mono mb-3 text-[10px] font-bold tracking-widest text-stone-500 uppercase group-hover:text-white/70">
              → Email
            </div>
            <div className="flex items-center justify-between text-xl font-bold md:text-2xl">
              {t('email')}
              <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" size={22} />
            </div>
          </a>
          <a
            href="tel:+573176608420"
            className="group rounded-xl border border-stone-800 bg-stone-900 p-6 text-white transition hover:border-[#3B5BDB] hover:bg-[#3B5BDB]"
          >
            <div className="mono mb-3 text-[10px] font-bold tracking-widest text-stone-400 uppercase group-hover:text-white/70">
              → WhatsApp
            </div>
            <div className="flex items-center justify-between text-xl font-bold md:text-2xl">
              {t('whatsapp')}
              <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" size={22} />
            </div>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-stone-800 bg-stone-900 p-6 text-white transition hover:border-[#3B5BDB] hover:bg-[#3B5BDB]"
          >
            <div className="mono mb-3 text-[10px] font-bold tracking-widest text-stone-400 uppercase group-hover:text-white/70">
              → LinkedIn
            </div>
            <div className="flex items-center justify-between gap-3 text-xl font-bold md:text-2xl">
              <span className="min-w-0 truncate">{t('linkedin')}</span>
              <ArrowUpRight className="shrink-0 opacity-0 transition group-hover:opacity-100" size={22} />
            </div>
            <p className="mono mt-2 truncate text-xs text-stone-500 group-hover:text-white/60">
              {t('linkedinUrl')}
            </p>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-stone-800 bg-stone-900 p-6 text-white transition hover:border-[#3B5BDB] hover:bg-[#3B5BDB]"
          >
            <div className="mono mb-3 text-[10px] font-bold tracking-widest text-stone-400 uppercase group-hover:text-white/70">
              → GitHub
            </div>
            <div className="flex items-center justify-between text-xl font-bold md:text-2xl">
              {t('github')}
              <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" size={22} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
