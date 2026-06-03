'use client';

import Image from 'next/image';
import { useState } from 'react';
import MockPreview from '@/components/MockPreview';
import type { MockType } from '@/types/portfolio';
import { caseStudyHeroPath, workImagePath, type ProjectSlug } from '@/config/projects';

/** Hero banner: never upscale captures — keeps Power BI screenshots sharp. */
const HERO_DIMENSIONS: Partial<Record<ProjectSlug, { width: number; height: number }>> = {
  'medellin-dap': { width: 1920, height: 917 },
  amva: { width: 1992, height: 1152 },
  'rag-pot-medellin': { width: 1200, height: 630 },
};

export default function CaseStudyHero({
  slug,
  mockType,
}: {
  slug: ProjectSlug;
  mockType: MockType;
}) {
  const [useMock, setUseMock] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = [caseStudyHeroPath(slug), workImagePath(slug)];
  const src = sources[Math.min(srcIndex, sources.length - 1)];
  const dims = HERO_DIMENSIONS[slug] ?? { width: 1200, height: 675 };

  const handleError = () => {
    if (srcIndex < sources.length - 1) setSrcIndex((i) => i + 1);
    else setUseMock(true);
  };

  if (useMock) {
    return (
      <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
        <MockPreview type={mockType} slug={slug} />
      </div>
    );
  }

  return (
    <div className="mb-12 overflow-hidden rounded-xl border border-stone-200 bg-[#0c1222] px-4 py-6 md:px-10 md:py-8">
      <div className="mx-auto flex max-w-5xl justify-center">
        <Image
          src={src}
          alt=""
          width={dims.width}
          height={dims.height}
          className="h-auto max-h-[min(52vh,520px)] w-auto max-w-full object-contain shadow-sm"
          sizes="(max-width: 1024px) 100vw, 1200px"
          quality={92}
          priority
          onError={handleError}
        />
      </div>
    </div>
  );
}
