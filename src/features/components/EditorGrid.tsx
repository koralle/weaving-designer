import type { FC, HTMLAttributes } from 'react';

import { DraftGrid } from './DraftGrid';

type Props = {
  width: number;
  height: number;
} & HTMLAttributes<HTMLDivElement>;

const EditorGrid: FC<Props> = ({ width, height, ...props }: Props) => (
  <DraftGrid
    width={width}
    height={height}
    {...props}
  />
);

export { EditorGrid };
