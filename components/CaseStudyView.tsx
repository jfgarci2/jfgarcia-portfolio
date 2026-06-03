import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/CaseStudyHero';
import CaseStudyDashboards from '@/components/CaseStudyDashboards';
import { type ProjectSlug } from '@/config/projects';
import { getProjectDashboards } from '@/data/dashboards';
import { getDashboardGallery } from '@/lib/dashboard-gallery';
import { RAG_DEMO_URL } from '@/lib/constants';
import type { CaseStudyMetric } from '@/types/portfolio';

export default async function CaseStudyView({ slug }: { slug: ProjectSlug }) {
  const t = await getTranslations('caseStudies');
  const tWork = await getTranslations('work');

  const title = t(`${slug}.title`);
  const summary = t(`${slug}.summary`);
  const challenge = t(`${slug}.challenge`);
  const approach = t(`${slug}.approach`);
  const outcome = t(`${slug}.outcome`);
  const metrics = t.raw(`${slug}.metrics`) as CaseStudyMetric[];
  const dashboards = getProjectDashboards(slug);
  const hasGallery = getDashboardGallery(slug).length > 0;

  const mockType =
    slug === 'rag-pot-medellin' ? 'kpi' : slug === 'medellin-dap' ? 'kpi' : 'dashboard';

  const workItems = tWork.raw('items') as { slug: string; client: string; clientFull: string }[];
  const related = workItems.find((w) => w.slug === slug);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-[#0A0A0A]"
          >
            <ArrowLeft size={16} />
            {t('backToWork')}
          </Link>
          {dashboards.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hasGallery && (
                <a
                  href="#dashboard-previews"
                  className="mono rounded-full border border-stone-300 px-3 py-1.5 text-[10px] font-bold tracking-widest text-stone-600 uppercase transition hover:border-[#3B5BDB] hover:text-[#3B5BDB]"
                >
                  {t('jumpGallery')}
                </a>
              )}
              <a
                href="#live-dashboards"
                className="mono rounded-full bg-[#0A0A0A] px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase transition hover:bg-[#3B5BDB]"
              >
                {t('jumpLive')}
              </a>
            </div>
          )}
        </div>
      </header>

      <article className="mx-auto max-w-[1400px] px-6 pt-28 pb-16 lg:px-10 lg:pb-24">
        <div className="mono mb-4 text-[11px] font-medium tracking-widest text-[#3B5BDB] uppercase">
          — {t('relatedProject')}
        </div>
        {related && (
          <p className="mb-2 text-sm text-stone-500">
            {related.client} · {related.clientFull}
          </p>
        )}
        <h1 className="mb-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-stone-600">{summary}</p>

        <CaseStudyHero slug={slug} mockType={mockType} />

        {dashboards.length > 0 && (
          <section
            id="dashboard-previews"
            className="mb-16 scroll-mt-28 border-b border-stone-200 pb-16"
          >
            <CaseStudyDashboards projectSlug={slug} dashboards={dashboards} />
          </section>
        )}

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-stone-200 bg-stone-50 p-5">
              <div className="text-3xl font-bold text-[#3B5BDB]">{m.value}</div>
              <div className="mono mt-1 text-[10px] tracking-widest text-stone-500 uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <section className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="mono mb-3 text-[11px] font-bold tracking-widest text-[#3B5BDB] uppercase">
                {t('challenge')}
              </h2>
              <p className="text-lg leading-relaxed text-stone-700">{challenge}</p>
            </div>
            <div>
              <h2 className="mono mb-3 text-[11px] font-bold tracking-widest text-[#3B5BDB] uppercase">
                {t('approach')}
              </h2>
              <p className="text-lg leading-relaxed text-stone-700">{approach}</p>
            </div>
            <div>
              <h2 className="mono mb-3 text-[11px] font-bold tracking-widest text-[#3B5BDB] uppercase">
                {t('outcome')}
              </h2>
              <p className="text-lg leading-relaxed text-stone-700">{outcome}</p>
            </div>
          </section>

          <aside className="space-y-4">
            {slug === 'rag-pot-medellin' && (
              <a
                href={RAG_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#0A0A0A] p-5 text-white transition hover:bg-[#3B5BDB]"
              >
                <span className="font-semibold">{t('ragLiveCta')}</span>
                <ArrowUpRight className="transition group-hover:opacity-80" size={18} />
              </a>
            )}

            {slug === 'medellin-dap' && (
              <Link
                href="/work/rag-pot-medellin"
                className="group flex items-center justify-between rounded-xl border border-stone-200 p-5 transition hover:border-[#3B5BDB]"
              >
                <span className="text-sm font-semibold">{t('ragCaseLink')}</span>
                <ArrowUpRight size={18} className="text-[#3B5BDB]" />
              </Link>
            )}
          </aside>
        </div>

      </article>
      <Footer />
    </div>
  );
}
