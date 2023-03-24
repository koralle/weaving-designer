import type { FC, HTMLAttributes } from 'react';

import { DraftGrid } from './DraftGrid';

const WeftGrid = ({
  heddle,
  height,
  ...props
}: { heddle: number; height: number } & HTMLAttributes<HTMLDivElement>) => (
  <DraftGrid
    width={heddle}
    height={height}
    {...props}
  />
);

export { WeftGrid };
