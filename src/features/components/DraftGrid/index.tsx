import { clsx } from 'clsx';
import { FC } from 'react';

import { DraftGridRow } from './DraftGridRow';

type Props = {
  width: number;
  height: number;
};

const DraftGrid: FC<Props> = ({ width, height }: Props) => {
  return (
    <div className={clsx('border-y-wd-info', 'border-y-[0.5px]', 'w-fit')}>
      {new Array(height).fill(0).map((_, index) => (
        <DraftGridRow
          row={index}
          width={width}
          key={`row: ${index}`}
        />
      ))}
    </div>
  );
};

export { DraftGrid };
