import GisStackPreview from '@/components/GisStackPreview';
import type { MockType } from '@/types/portfolio';
import type { ProjectSlug } from '@/config/projects';

const barHeights = [40, 65, 50, 80, 45, 70, 55, 85, 60, 75, 90, 65];

export default function MockPreview({
  type,
  slug,
}: {
  type: MockType;
  slug?: ProjectSlug | string;
}) {
  if (type === 'geodata' && slug) {
    return <GisStackPreview slug={slug} />;
  }
  if (type === 'dashboard') {
    return (
      <div className="flex h-full w-full flex-col gap-2 bg-white p-4">
        <div className="mb-1 flex items-center justify-between">
          <div className="h-2 w-20 rounded bg-stone-200" />
          <div className="h-2 w-12 rounded bg-blue-100" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded bg-blue-50 p-2">
              <div className="mb-1 h-1.5 w-8 rounded bg-stone-300" />
              <div className={`h-3 rounded bg-blue-600 ${i === 0 ? 'w-12' : i === 1 ? 'w-10' : 'w-14'}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1 rounded bg-stone-50 p-2">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-blue-500" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex h-8 items-center gap-1 rounded bg-stone-100 px-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <div className="h-1 flex-1 rounded bg-stone-300" />
          </div>
          <div className="flex h-8 items-center gap-1 rounded bg-stone-100 px-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <div className="h-1 flex-1 rounded bg-stone-300" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-blue-50 p-4">
        <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#dbeafe" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="140" fill="url(#grid)" />
          <path
            d="M 20 80 Q 40 60, 60 70 T 100 65 T 140 70 T 180 60"
            stroke="#3B82F6"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 30 100 Q 50 90, 70 95 T 120 90 T 170 100"
            stroke="#60A5FA"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="40,40 60,30 80,45 75,70 50,75 35,55"
            fill="#3B82F6"
            fillOpacity="0.15"
            stroke="#3B82F6"
            strokeWidth="1"
          />
          <polygon
            points="100,30 130,25 145,50 130,65 110,60"
            fill="#1E40AF"
            fillOpacity="0.2"
            stroke="#1E40AF"
            strokeWidth="1"
          />
          <polygon
            points="150,75 175,70 180,95 160,105 145,90"
            fill="#3B82F6"
            fillOpacity="0.25"
            stroke="#3B82F6"
            strokeWidth="1"
          />
          {[
            [55, 50],
            [120, 45],
            [165, 90],
            [40, 110],
            [90, 95],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="3" fill="#1E40AF" />
              <circle cx={cx} cy={cy} r="6" fill="#1E40AF" fillOpacity="0.2" />
            </g>
          ))}
        </svg>
        <div className="absolute top-3 right-3 rounded bg-white/90 px-2 py-1 font-mono text-[8px] text-stone-700 backdrop-blur">
          MAGNA-SIRGAS CTM12
        </div>
        <div className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 font-mono text-[8px] text-stone-700 backdrop-blur">
          5 layers · 1,247 features
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-stone-50 p-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded border border-stone-200 bg-white p-3">
          <div className="mb-1 font-mono text-[8px] text-stone-500">REVENUE</div>
          <div className="text-lg font-semibold text-stone-900">$2.4M</div>
          <div className="text-[8px] text-emerald-600">↑ 18.2%</div>
        </div>
        <div className="rounded border border-stone-200 bg-white p-3">
          <div className="mb-1 font-mono text-[8px] text-stone-500">OCCUPANCY</div>
          <div className="text-lg font-semibold text-stone-900">94.7%</div>
          <div className="text-[8px] text-emerald-600">↑ 2.1%</div>
        </div>
      </div>
      <div className="flex-1 rounded border border-stone-200 bg-white p-3">
        <div className="mb-2 font-mono text-[8px] text-stone-500">QUARTERLY</div>
        <svg viewBox="0 0 200 60" className="h-full w-full">
          <polyline
            points="0,40 25,35 50,38 75,28 100,30 125,20 150,22 175,15 200,18"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
          <polyline
            points="0,45 25,42 50,45 75,38 100,42 125,35 150,38 175,32 200,35"
            stroke="#60A5FA"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="3,3"
          />
        </svg>
      </div>
      <div className="flex gap-2">
        <div className="flex h-6 flex-1 items-center rounded bg-blue-100 px-2">
          <div className="h-1.5 w-3/4 rounded bg-blue-600" />
        </div>
        <div className="flex h-6 w-16 items-center justify-center rounded bg-blue-600">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
