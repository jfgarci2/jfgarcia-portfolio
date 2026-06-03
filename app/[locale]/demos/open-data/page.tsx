import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { GITHUB_URL, OPEN_DATA_DEMO_URL } from '@/lib/constants';
import type { Locale } from '@/i18n/routing';

const DATA_SOURCES = [
  { name: 'datos.gov.co', url: 'https://www.datos.gov.co/' },
  { name: 'Datos Abiertos Medellín', url: 'https://www.medellin.gov.co/es/transparencia/datos-abiertos/' },
];

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'demos' });
  return {
    title: `${t('openDataTitle')} — José Fernando García Pérez`,
    description: t('openDataDesc'),
  };
}

export default async function OpenDataDemoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('demos');
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-stone-200">
        <div className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
          <Link
            href="/#demos"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-[#0A0A0A]"
          >
            <ArrowLeft size={16} />
            {t('backToDemos')}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
          — datos abiertos
        </div>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0A0A0A] md:text-5xl">
          {t('openDataTitle')}
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-stone-600">{t('openDataDesc')}</p>

        <section className="mb-10 rounded-xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="mono mb-4 text-[10px] font-bold tracking-widest text-stone-500 uppercase">
            Data sources
          </h2>
          <ul className="space-y-3">
            {DATA_SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#3B5BDB] hover:underline"
                >
                  {s.name}
                  <ExternalLink size={14} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-xl border border-dashed border-stone-300 p-8 text-center">
          {OPEN_DATA_DEMO_URL ? (
            <>
              <p className="mb-4 text-sm text-stone-600">
                {locale === 'es'
                  ? 'Tablero en vivo configurado. Ábrelo abajo.'
                  : 'Live dashboard is configured. Open it below.'}
              </p>
              <a
                href={OPEN_DATA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-[#0A0A0A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3B5BDB]"
              >
                {t('openDataCta')}
                <ArrowUpRight size={16} />
              </a>
            </>
          ) : (
            <>
              {process.env.NODE_ENV === 'development' && (
                <p className="text-sm text-stone-600">{t('openDataSoonDev')}</p>
              )}
              {process.env.NODE_ENV !== 'development' && (
                <span className="mono inline-flex rounded-full bg-stone-100 px-4 py-2 text-[11px] font-bold tracking-widest text-stone-600 uppercase">
                  {t('openDataComingSoon')}
                </span>
              )}
            </>
          )}
        </section>

        <p className="text-sm text-stone-500">
          Pipeline stack: Python · Pandas · Power BI · public APIs. Repo:{' '}
          <a href={GITHUB_URL} className="text-[#3B5BDB] hover:underline">
            GitHub
          </a>
        </p>
      </main>
    </div>
  );
}
