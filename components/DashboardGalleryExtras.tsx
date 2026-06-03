'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { DASHBOARD_GALLERY_EXTRAS } from '@/lib/dashboard-gallery';
import type { ProjectSlug } from '@/config/projects';

export default function DashboardGalleryExtras({ projectSlug }: { projectSlug: ProjectSlug }) {
  const items = DASHBOARD_GALLERY_EXTRAS[projectSlug];
  const t = useTranslations('caseStudies');

  if (!items?.length) return null;

  return (
    <div className="space-y-4 border-t border-stone-200 pt-10">
      <div>
        <h3 className="mono text-[10px] font-bold tracking-widest text-stone-500 uppercase">
          {t('galleryExtrasTitle')}
        </h3>
        <p className="mt-2 text-sm text-stone-600">{t('galleryExtrasSub')}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.src}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white"
          >
            <div className="relative aspect-[16/10] bg-stone-100">
              <Image
                src={item.src}
                alt={t(item.labelKey)}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <p className="px-3 py-2 text-xs font-semibold text-stone-800">{t(item.labelKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
