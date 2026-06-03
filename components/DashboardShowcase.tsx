'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink, LayoutDashboard } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { DashboardEntry } from '@/data/dashboards';
import type { ProjectSlug } from '@/config/projects';

export default function DashboardShowcase({
  projectSlug,
  dashboards,
  previewId: controlledPreviewId,
  onPreviewChange,
}: {
  projectSlug: ProjectSlug;
  dashboards: DashboardEntry[];
  previewId?: string | null;
  onPreviewChange?: (id: string) => void;
}) {
  const t = useTranslations('caseStudies');
  const tDash = useTranslations('dashboards');
  const tWork = useTranslations('work');
  const [internalPreviewId, setInternalPreviewId] = useState<string | null>(
    dashboards.find((d) => d.embeddable)?.id ?? null,
  );

  const isControlled = controlledPreviewId !== undefined;
  const previewId = isControlled ? controlledPreviewId : internalPreviewId;
  const setPreviewId = (id: string) => {
    if (onPreviewChange) onPreviewChange(id);
    if (!isControlled) setInternalPreviewId(id);
  };

  if (dashboards.length === 0) {
    return (
      <p className="text-sm leading-relaxed text-stone-500">{tWork('dashboardsPending')}</p>
    );
  }

  const active = dashboards.find((d) => d.id === previewId);

  return (
    <div className="space-y-4">
      <h3 className="mono text-[10px] font-bold tracking-widest text-stone-500 uppercase">
        {t('liveDashboards')} ({dashboards.length})
      </h3>

      <ul className="space-y-2">
        {dashboards.map((d) => {
          const title = tDash(`${projectSlug}.${d.titleKey}`);
          const isActive = previewId === d.id;
          return (
            <li key={d.id}>
              <div
                className={`rounded-lg border px-4 py-3 transition ${
                  isActive
                    ? 'border-[#3B5BDB] bg-[#3B5BDB]/5'
                    : 'border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => d.embeddable && setPreviewId(d.id)}
                    className="flex min-w-0 flex-1 items-start gap-2 text-left"
                  >
                    <LayoutDashboard
                      size={16}
                      className="mt-0.5 shrink-0 text-[#3B5BDB]"
                    />
                    <span className="text-sm font-semibold text-stone-900">{title}</span>
                  </button>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono shrink-0 inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-[#3B5BDB] uppercase hover:underline"
                  >
                    {tWork('viewDashboard')}
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {active?.embeddable && (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
          <div className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-2">
            <span className="text-xs font-medium text-stone-600">
              {tDash(`${projectSlug}.${active.titleKey}`)}
            </span>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#3B5BDB] hover:underline"
            >
              <ExternalLink size={12} />
              Full screen
            </a>
          </div>
          <div className="relative aspect-[16/10] w-full bg-stone-100">
            <iframe
              title={tDash(`${projectSlug}.${active.titleKey}`)}
              src={active.url}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="px-4 py-2 text-[10px] text-stone-500">
            {t('embedNote')}
          </p>
        </div>
      )}
    </div>
  );
}
