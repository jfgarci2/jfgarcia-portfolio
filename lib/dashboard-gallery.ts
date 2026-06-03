import type { ProjectSlug } from '@/config/projects';

export type DashboardGalleryItem = {
  /** Matches `DashboardEntry.id` in data/dashboards.ts */
  dashboardId: string;
  src: string;
};

const GALLERY_BY_PROJECT: Partial<Record<ProjectSlug, DashboardGalleryItem[]>> = {
  amva: [
    {
      dashboardId: 'sancionatorios',
      src: '/work/dashboards/amva/sancionatorios.webp',
    },
    {
      dashboardId: 'permisos',
      src: '/work/dashboards/amva/permisos.webp',
    },
    {
      dashboardId: 'arboles',
      src: '/work/dashboards/amva/arboles.webp',
    },
    {
      dashboardId: 'planAccion',
      src: '/work/dashboards/amva/plan-accion.webp',
    },
  ],
  'medellin-dap': [
    {
      dashboardId: 'presentacionAmva',
      src: '/work/dashboards/medellin-dap/presentacion-amva.webp',
    },
    {
      dashboardId: 'juridico',
      src: '/work/dashboards/medellin-dap/juridico.webp',
    },
    {
      dashboardId: 'anywhere',
      src: '/work/dashboards/medellin-dap/anywhere.webp',
    },
    {
      dashboardId: 'oficiosUptPot',
      src: '/work/dashboards/medellin-dap/oficios-upt-pot.webp',
    },
    {
      dashboardId: 'temasEstrategicos',
      src: '/work/dashboards/medellin-dap/temas-estrategicos.webp',
    },
    {
      dashboardId: 'procesoParticipativo',
      src: '/work/dashboards/medellin-dap/proceso-participativo.webp',
    },
    {
      dashboardId: 'mesasPot2025',
      src: '/work/dashboards/medellin-dap/mesas-pot-2025.webp',
    },
    {
      dashboardId: 'portafolioSubdireccion',
      src: '/work/dashboards/medellin-dap/portafolio-subdireccion.webp',
    },
  ],
};

/** Additional captures (Netlify sub-sites, extra report pages) — Medellín DAP only */
export const DASHBOARD_GALLERY_EXTRAS: Partial<
  Record<ProjectSlug, { src: string; labelKey: string }[]>
> = {
  'medellin-dap': [
    {
      labelKey: 'extraGobernanza',
      src: '/work/dashboards/medellin-dap/extras/gobernanza-netlify.webp',
    },
    {
      labelKey: 'extraMacroRio',
      src: '/work/dashboards/medellin-dap/extras/macroproyecto-rio-norte.webp',
    },
    {
      labelKey: 'extraOficiosAlertas',
      src: '/work/dashboards/medellin-dap/extras/oficios-alertas.webp',
    },
    {
      labelKey: 'extraMesasTecnicas',
      src: '/work/dashboards/medellin-dap/extras/mesas-tecnicas.webp',
    },
  ],
};

export function getDashboardGallery(slug: ProjectSlug): DashboardGalleryItem[] {
  return GALLERY_BY_PROJECT[slug] ?? [];
}
