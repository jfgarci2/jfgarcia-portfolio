'use client';

import Image from 'next/image';
import { useState } from 'react';
import GisStackPreview from '@/components/GisStackPreview';
import MockPreview from '@/components/MockPreview';
import type { MockType } from '@/types/portfolio';
import { isGisDataSlug, workImagePath, type ProjectSlug } from '@/config/projects';

export default function ProjectPreview({
  slug,
  mockType,
  fit = 'contain',
  priority = false,
}: {
  slug: ProjectSlug | string;
  mockType: MockType;
  /** contain = sharp dashboard captures; cover = photo-style crop */
  fit?: 'contain' | 'cover';
  priority?: boolean;
}) {
  const [useMock, setUseMock] = useState(false);
  const projectSlug = slug as ProjectSlug;
  const src = workImagePath(projectSlug);

  if (mockType === 'geodata' || isGisDataSlug(projectSlug)) {
    return <GisStackPreview slug={projectSlug} />;
  }

  if (useMock) {
    return <MockPreview type={mockType} slug={projectSlug} />;
  }

  const isContain = fit === 'contain';

  return (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      className={
        isContain
          ? 'img-dashboard object-contain object-center p-2 md:p-4'
          : 'object-cover object-top'
      }
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
      quality={92}
      onError={() => setUseMock(true)}
    />
  );
}
