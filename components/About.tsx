'use client';

import Image from 'next/image';
import { Award, Calendar, Download, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CV_PATH, HEADSHOT_PATH } from '@/lib/constants';

export default function About() {
  const t = useTranslations('about');
  const roles = t.raw('roles') as string[];
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
              — {t('sectionLabel')}
            </div>

            <div className="mb-8">
              {!headshotError ? (
                <div className="relative mb-6 h-36 w-36 overflow-hidden rounded-2xl border-2 border-white bg-stone-100 shadow-lg shadow-stone-300/40 ring-2 ring-[#3B5BDB]/25">
                  <Image
                    src={HEADSHOT_PATH}
                    alt={t('headshotAlt')}
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                    priority
                    onError={() => setHeadshotError(true)}
                  />
                </div>
              ) : (
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-xl bg-[#0A0A0A] text-2xl font-bold text-white">
                  JG
                </div>
              )}
            </div>

            <h2 className="mb-6 text-4xl leading-[1.05] font-semibold tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl">
              {t('name').split(' ').slice(0, 2).join(' ')}
              <br />
              {t('name').split(' ').slice(2).join(' ')}
            </h2>
            <div className="mb-8 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="mono rounded-full bg-[#3B5BDB]/10 px-3 py-1.5 text-[11px] font-semibold text-[#3B5BDB] uppercase"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="space-y-3 text-sm text-stone-700">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-stone-400" />
                {t('location')}
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-stone-400" />
                20+ {t('years')}
              </div>
              <div className="flex items-center gap-3">
                <Award size={14} className="text-stone-400" />
                {t('license')}
              </div>
            </div>

            <a
              href={CV_PATH}
              download
              className="mono mt-6 inline-flex items-center gap-2 rounded-md border border-stone-300 px-4 py-2.5 text-[11px] font-semibold text-stone-800 transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
            >
              <Download size={14} />
              {t('downloadCv')}
            </a>
          </div>
          <div className="space-y-5 md:col-span-7 md:pl-12">
            <p className="text-lg leading-relaxed text-stone-700">{t('p1')}</p>
            <p className="text-lg leading-relaxed text-stone-700">{t('p2')}</p>
            <p className="text-lg leading-relaxed text-stone-700">{t('p3')}</p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="mono mb-2 text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                  {t('languagesTitle')}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>{t('spanish')}</span>
                    <span className="text-stone-500">{t('spanishLevel')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('english')}</span>
                    <span className="text-stone-500">{t('englishLevel')}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mono mb-2 text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                  {t('availabilityTitle')}
                </div>
                <div className="space-y-1 text-sm text-stone-700">
                  <div>{t('availability')}</div>
                  <div className="text-stone-500">{t('availabilitySub')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
