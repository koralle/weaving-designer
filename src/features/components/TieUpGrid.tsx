import type { FC, HTMLAttributes } from 'react';

import { defaultHeddle, defaultTreadle } from '../../schemas/Draft';
import { DraftGrid } from './DraftGrid';

type Props = {
  treadle: number;
  heddle: number;
} & HTMLAttributes<HTMLDivElement>;

const TieUpGrid = ({ treadle = defaultTreadle, heddle = defaultHeddle, ...props }: Props) => (
  <DraftGrid
    width={heddle}
    height={treadle}
    {...props}
  />
);

export { TieUpGrid };
