'use client';

import { useCallback, useRef, useState } from 'react';
import DashboardGallery from '@/components/DashboardGallery';
import DashboardGalleryExtras from '@/components/DashboardGalleryExtras';
import DashboardShowcase from '@/components/DashboardShowcase';
import type { DashboardEntry } from '@/data/dashboards';
import { getDashboardGallery } from '@/lib/dashboard-gallery';
import type { ProjectSlug } from '@/config/projects';

export default function CaseStudyDashboards({
  projectSlug,
  dashboards,
}: {
  projectSlug: ProjectSlug;
  dashboards: DashboardEntry[];
}) {
  const gallery = getDashboardGallery(projectSlug);
  const galleryIds = new Set(gallery.map((g) => g.dashboardId));
  const defaultId =
    gallery.find((g) => dashboards.some((d) => d.id === g.dashboardId))?.dashboardId ??
    dashboards.find((d) => d.embeddable)?.id ??
    null;

  const [previewId, setPreviewId] = useState<string | null>(defaultId);
  const liveRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback((dashboardId: string) => {
    if (!dashboards.some((d) => d.id === dashboardId)) return;
    setPreviewId(dashboardId);
    liveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [dashboards]);

  const showcaseDashboards =
    gallery.length > 0
      ? dashboards.filter((d) => galleryIds.has(d.id) || d.embeddable)
      : dashboards;

  return (
    <div className="space-y-12">
      {gallery.length > 0 && (
        <DashboardGallery
          projectSlug={projectSlug}
          items={gallery}
          activeId={previewId}
          onSelect={handleSelect}
        />
      )}

      <DashboardGalleryExtras projectSlug={projectSlug} />

      <div ref={liveRef} id="live-dashboards" className="scroll-mt-28">
        <DashboardShowcase
          projectSlug={projectSlug}
          dashboards={showcaseDashboards}
          previewId={previewId}
          onPreviewChange={setPreviewId}
        />
      </div>
    </div>
  );
}
