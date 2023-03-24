import { FC, HTMLAttributes } from 'react';

import { DraftGrid } from './DraftGrid';

type Props = {
  width: number;
} & HTMLAttributes<HTMLDivElement>;

const WarpColorPalette: FC<Props> = ({ width, ...props }: Props) => (
  <DraftGrid
    width={width}
    height={1}
    {...props}
  />
);

export { WarpColorPalette };
