import type { FC, HTMLAttributes } from 'react';

import { DraftGrid } from './DraftGrid';

type Props = {
  height: number;
} & HTMLAttributes<HTMLDivElement>;

const WeftColorPalette: FC<Props> = ({ height, ...props }: Props) => (
  <DraftGrid
    width={1}
    height={height}
    {...props}
  />
);

export { WeftColorPalette };
