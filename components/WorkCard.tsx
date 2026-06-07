'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ProjectPreview from '@/components/ProjectPreview';
import type { WorkFilter, WorkItem, WorkTag } from '@/types/portfolio';
import type { ProjectSlug } from '@/config/projects';
import { getProjectDashboards } from '@/data/dashboards';
import { isGisDataSlug } from '@/config/projects';

export default function WorkCard({
  item,
  filterLabel,
}: {
  item: WorkItem;
  filterLabel: (tag: WorkTag) => string;
}) {
  const t = useTranslations('work');
  const slug = item.slug as ProjectSlug;
  const liveCount = getProjectDashboards(slug).length;
  const isGisFocus = isGisDataSlug(slug) || item.mockType === 'geodata';

  const inner = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-stone-200 bg-[#0c1222]">
        <ProjectPreview
          slug={slug}
          mockType={item.mockType}
          fit="contain"
          priority={slug === 'vertex-rd' || slug === 'medellin-cadastral' || slug === 'amva' || slug === 'medellin-dap'}
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {item.active && (
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-2 py-1 text-[10px] font-bold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              {t('activeBadge')}
            </div>
          )}
          <div className="mono rounded bg-white/90 px-2 py-1 text-[10px] font-bold text-[#0A0A0A] backdrop-blur">
            {item.id}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div className="mono text-[10px] font-medium tracking-widest text-stone-500 uppercase">
            {item.period}
          </div>
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="mono rounded bg-[#3B5BDB]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#3B5BDB] uppercase"
              >
                {filterLabel(tag)}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mb-1 flex items-start gap-2 text-2xl leading-tight font-bold text-[#0A0A0A] transition group-hover:text-[#3B5BDB]">
          {item.client}
          <ArrowUpRight
            size={20}
            className="mt-0.5 shrink-0 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          />
        </h3>
        <div className="mb-1 text-sm text-stone-500">{item.clientFull}</div>
        <div className="mb-4 text-sm font-semibold text-stone-700">{item.role}</div>

        <div className="mb-4 border-l-2 border-[#3B5BDB] bg-stone-50 py-2 pl-3">
          <div className="mono mb-1 text-[9px] font-bold tracking-widest text-[#3B5BDB] uppercase">
            {t('impactLabel')}
          </div>
          <p className="text-sm leading-snug text-stone-800">{item.impact}</p>
        </div>

        {item.desc && (
          <p className="mb-4 text-sm leading-relaxed text-stone-600">{item.desc}</p>
        )}

        {item.deliverables && item.deliverables.length > 0 && !item.hasCaseStudy && (
          <ul className="mb-4 space-y-1">
            {item.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B5BDB]" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span
              key={s}
              className="mono rounded bg-stone-100 px-2 py-1 text-[10px] font-medium text-stone-600"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {liveCount > 0 && (
            <span className="mono rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
              {liveCount} {t('liveDashboards')}
            </span>
          )}
          {isGisFocus && (
            <span className="mono rounded-full bg-[#3B5BDB]/10 px-2 py-1 text-[10px] font-bold text-[#3B5BDB]">
              {t('gisFocusBadge')}
            </span>
          )}
          {item.hasCaseStudy && (
            <span className="mono text-[11px] font-semibold text-[#3B5BDB]">
              {t('viewCaseStudy')} →
            </span>
          )}
        </div>

        {(item.demoUrl || item.codeUrl) && (
          <div className="mt-4 flex flex-wrap gap-3 border-t border-stone-100 pt-4">
            {item.demoUrl && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mono text-[10px] font-bold tracking-widest text-[#3B5BDB] uppercase hover:underline"
              >
                {t('viewDemo')} ↗
              </a>
            )}
            {item.codeUrl && (
              <a
                href={item.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mono text-[10px] font-bold tracking-widest text-stone-600 uppercase hover:text-[#0A0A0A]"
              >
                {t('viewCode')} ↗
              </a>
            )}
            {item.reportUrl && (
              <a
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mono text-[10px] font-bold tracking-widest text-stone-600 uppercase hover:text-[#0A0A0A]"
              >
                {t('viewReport')} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );

  if (item.hasCaseStudy) {
    return (
      <Link
        href={`/work/${slug}`}
        className="group block overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B5BDB]/40 hover:shadow-xl hover:shadow-[#3B5BDB]/10"
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white">
      {inner}
    </article>
  );
}
