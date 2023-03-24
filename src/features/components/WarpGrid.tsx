import type { FC, HTMLAttributes } from 'react';
import { DraftGrid } from './DraftGrid';

type Props = {
  width: number;
  treadle: number;
} & HTMLAttributes<HTMLDivElement>;

const WarpGrid = ({ width, treadle, ...props }: Props) => (
  <DraftGrid
    width={width}
    height={treadle}
    {...props}
  />
);

export { WarpGrid };
