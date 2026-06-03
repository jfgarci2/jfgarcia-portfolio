'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { DashboardGalleryItem } from '@/lib/dashboard-gallery';
import type { ProjectSlug } from '@/config/projects';

export default function DashboardGallery({
  projectSlug,
  items,
  activeId,
  onSelect,
}: {
  projectSlug: ProjectSlug;
  items: DashboardGalleryItem[];
  activeId: string | null;
  onSelect: (dashboardId: string) => void;
}) {
  const t = useTranslations('caseStudies');
  const tDash = useTranslations('dashboards');

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mono text-[11px] font-bold tracking-widest text-[#3B5BDB] uppercase">
          {t('galleryTitle')}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">{t('gallerySub')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const title = tDash(`${projectSlug}.${item.dashboardId}`);
          const isActive = activeId === item.dashboardId;

          return (
            <button
              key={item.dashboardId}
              type="button"
              onClick={() => onSelect(item.dashboardId)}
              className={`group overflow-hidden rounded-xl border bg-white text-left transition ${
                isActive
                  ? 'border-[#3B5BDB] ring-2 ring-[#3B5BDB]/20'
                  : 'border-stone-200 hover:border-stone-400'
              }`}
            >
              <div className="relative flex aspect-[16/10] items-center justify-center bg-[#0c1222] p-2">
                <Image
                  src={item.src}
                  alt={title}
                  fill
                  className="img-dashboard object-contain object-center p-1 transition group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  quality={92}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="text-sm font-semibold text-white">{title}</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-3">
                <span className="mono text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                  {isActive ? t('gallerySelected') : t('gallerySelect')}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3B5BDB]">
                  <Play size={12} />
                  {t('viewLive')}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
