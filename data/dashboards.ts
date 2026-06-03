import type { ProjectSlug } from '@/config/projects';

export type DashboardKind = 'powerbi' | 'web' | 'rag';

export interface DashboardEntry {
  id: string;
  /** Key under messages `dashboards.{projectSlug}.{id}` */
  titleKey: string;
  url: string;
  kind: DashboardKind;
  /** Safe to embed in iframe (Power BI publish-to-web, Netlify, etc.) */
  embeddable: boolean;
}

/** Extracted from TABLEROS DE DATOS GITHUB (public publish-to-web links). */
export const PROJECT_DASHBOARDS: Partial<Record<ProjectSlug, DashboardEntry[]>> = {
  amva: [
    {
      id: 'permisos',
      titleKey: 'permisos',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYTQyMDY1YzQtMTY4My00ZGUxLWI2NGQtODU4MWM1NGU0NDdjIiwidCI6IjRkZWI0ZjAwLTNhOTgtNDcwMi04Nzk2LTIxNmRiMDljMzA3YyIsImMiOjR9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'planAccion',
      titleKey: 'planAccion',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMDhkMjMyNWEtNTU3MC00NWI5LWJhMWItMDkxZTMzYzc3YzVkIiwidCI6IjRkZWI0ZjAwLTNhOTgtNDcwMi04Nzk2LTIxNmRiMDljMzA3YyIsImMiOjR9&pageName=b5784243dbec6969d0e9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'sancionatorios',
      titleKey: 'sancionatorios',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYjM5YWI3YjktOTg0Yi00M2UzLWE1NTItYWRjOTc4ZGE1NzdkIiwidCI6IjRkZWI0ZjAwLTNhOTgtNDcwMi04Nzk2LTIxNmRiMDljMzA3YyIsImMiOjR9&pageName=d81983a75d876c735296',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'arboles',
      titleKey: 'arboles',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMThlZjhkNjUtNDc4Zi00MzBkLTllYzgtMWE0ZTRmNDdhMTc5IiwidCI6IjRkZWI0ZjAwLTNhOTgtNDcwMi04Nzk2LTIxNmRiMDljMzA3YyIsImMiOjR9',
      kind: 'powerbi',
      embeddable: true,
    },
  ],
  'medellin-dap': [
    {
      id: 'presentacionAmva',
      titleKey: 'presentacionAmva',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiZjZlMDkzNWQtYWU4OC00MjY2LWI5OWUtYWQ1ODFhNmJlZDI0IiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'juridico',
      titleKey: 'juridico',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiOTk4YWNkN2YtNjQxZC00NTYxLTlhZjEtZTkwYzJmYmE3NmY5IiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'anywhere',
      titleKey: 'anywhere',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMTEyMjUyYTQtYzg2Zi00MmI3LTgzZjEtNzY1YWEzZjZiYTBmIiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'oficiosUptPot',
      titleKey: 'oficiosUptPot',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiZTI1NTc4ZmYtNGIyYS00MzI2LWFjNmItOTU3ZDI1OGRmNThlIiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'temasEstrategicos',
      titleKey: 'temasEstrategicos',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlOGU5ZDYtZTMwOS00N2RkLWFkMzktMzNjZGYxNGViMzU3IiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9&pageName=23a82700d8d26430bbb1',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'procesoParticipativo',
      titleKey: 'procesoParticipativo',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiZTY4ODFjNmMtZWFjMS00Zjg3LWE3MmEtMzhjMmNiZjc3NzQwIiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9&pageName=3d065e00a28469b8f266',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'mesasPot2025',
      titleKey: 'mesasPot2025',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMDg1ODI5OTMtNDk5ZC00ZWI4LTk0OGEtOTBjZmQ2ZDdhYWQyIiwidCI6IjE2YjI4NTU1LWE4Y2QtNGRkNS05MTIyLThkZTFhMWM0MTk0ZCJ9&pageName=ReportSection',
      kind: 'powerbi',
      embeddable: true,
    },
    {
      id: 'portafolioSubdireccion',
      titleKey: 'portafolioSubdireccion',
      url: 'https://69efdfd30a72573836c4179e--cheerful-kleicha-791e91.netlify.app/',
      kind: 'web',
      embeddable: true,
    },
  ],
};

export function getProjectDashboards(slug: ProjectSlug): DashboardEntry[] {
  return PROJECT_DASHBOARDS[slug] ?? [];
}
