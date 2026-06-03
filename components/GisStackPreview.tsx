import type { ProjectSlug } from '@/config/projects';

const STACK_BY_SLUG: Record<
  'devimed' | 'bioexplora' | 'antioquia',
  { eyebrow: string; title: string; nodes: string[]; footer: string }
> = {
  devimed: {
    eyebrow: 'Infraestructura vial · ANI / ANLA',
    title: 'Geodatabases + SQL + Python',
    nodes: ['FGDB tramos y obras', 'SQL · inventarios', 'ArcPy / Python', 'Modelos espaciales'],
    footer: '40+ proyectos de concesión',
  },
  bioexplora: {
    eyebrow: 'Riesgo ambiental · Planeación territorial',
    title: 'SIG + bases de datos + scripts',
    nodes: ['Geodatabases corporativas', 'PostGIS · SQL', 'Python / ArcPy', 'Cartografía y análisis'],
    footer: '80+ proyectos SIG (2012–2024)',
  },
  antioquia: {
    eyebrow: 'Gobernación de Antioquia',
    title: 'Geodatabases departamentales',
    nodes: ['FGDB institucionales', 'SQL Server', 'ArcPy ETL', 'Modelos multicriterio'],
    footer: 'Capas departamentales · MAGNA-SIRGAS',
  },
};

export default function GisStackPreview({ slug }: { slug: ProjectSlug | string }) {
  const key = slug as keyof typeof STACK_BY_SLUG;
  const data = STACK_BY_SLUG[key] ?? STACK_BY_SLUG.devimed;

  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#0c1222] via-[#111827] to-[#0f172a] p-5 text-white">
      <div>
        <div className="mono mb-2 text-[9px] font-bold tracking-widest text-[#60a5fa] uppercase">
          {data.eyebrow}
        </div>
        <div className="text-lg font-semibold tracking-tight text-white md:text-xl">{data.title}</div>
      </div>

      <div className="my-4 space-y-2">
        {data.nodes.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#3B5BDB]/25 text-[10px] font-bold text-[#93c5fd]">
              {i + 1}
            </div>
            <div className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-stone-200">
              {label}
            </div>
            {i < data.nodes.length - 1 && (
              <div className="absolute left-[2.1rem] hidden h-2 w-px bg-white/20 md:block" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <span className="mono text-[9px] text-stone-400">{data.footer}</span>
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
          SIG · SQL · Python
        </span>
      </div>
    </div>
  );
}
