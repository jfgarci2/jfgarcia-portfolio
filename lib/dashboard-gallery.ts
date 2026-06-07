import type { ProjectSlug } from '@/config/projects';

export type DashboardGalleryItem = {
  /** Matches `DashboardEntry.id` in data/dashboards.ts */
  dashboardId: string;
  src: string;
};

const GALLERY_BY_PROJECT: Partial<Record<ProjectSlug, DashboardGalleryItem[]>> = {
  amva: [
    {
      dashboardId: 'permisosLive',
      src: '/work/dashboards/amva/permisos-live.webp',
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
    {
      dashboardId: 'sancionatorios',
      src: '/work/dashboards/amva/sancionatorios.webp',
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

/** Additional captures (extra report pages) — gallery-only dashboards */
export const DASHBOARD_GALLERY_EXTRAS: Partial<
  Record<ProjectSlug, { src: string; labelKey: string; dashboardId?: string }[]>
> = {
  amva: [
    {
      labelKey: 'extraPermisosVista2',
      dashboardId: 'permisos',
      src: '/work/dashboards/amva/extras/permisos-vista-2.webp',
    },
    {
      labelKey: 'extraPermisosVista3',
      dashboardId: 'permisos',
      src: '/work/dashboards/amva/extras/permisos-vista-3.webp',
    },
  ],
  'medellin-dap': [
    {
      labelKey: 'extraJuridicoVista2',
      dashboardId: 'juridico',
      src: '/work/dashboards/medellin-dap/extras/juridico-vista-2.webp',
    },
    {
      labelKey: 'extraJuridicoVista3',
      dashboardId: 'juridico',
      src: '/work/dashboards/medellin-dap/extras/juridico-vista-3.webp',
    },
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
