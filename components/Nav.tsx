'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const otherLocale = locale === 'en' ? 'es' : 'en';

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrollY > 8 ? 'border-stone-200/80 shadow-sm shadow-stone-200/50' : 'border-stone-200'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 transition opacity-90 hover:opacity-100">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-[#0A0A0A] text-xs font-bold text-white">
            JG
          </div>
          <div className="text-sm font-semibold tracking-tight">{t('name')}</div>
        </Link>
        <div className="flex items-center gap-7 text-sm">
          <a
            href="#capabilities"
            className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
          >
            {t('capabilities')}
          </a>
            <a
              href="#work"
              className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
            >
              {t('work')}
            </a>
            <a
              href="#demos"
              className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
            >
              {t('demos')}
            </a>
          <a
            href="#stack"
            className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
          >
            {t('stack')}
          </a>
          <a
            href="#about"
            className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
          >
            {t('about')}
          </a>
          <a
            href="#hire"
            className="hidden font-medium text-stone-600 transition hover:text-[#0A0A0A] md:inline"
          >
            {t('hire')}
          </a>
          <Link
            href={pathname}
            locale={otherLocale}
            className="mono rounded border border-stone-300 px-2.5 py-1 text-[11px] font-medium transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
          >
            {t('toggleLocale')}
          </Link>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded bg-[#0A0A0A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3B5BDB] md:inline-flex"
          >
            {t('contact')}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div
        className="h-px bg-[#3B5BDB]"
        style={{ width: `${Math.min((scrollY / 3000) * 100, 100)}%` }}
      />
    </nav>
  );
}
