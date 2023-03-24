import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { DraftGridCell } from './DraftGridCell';

type Props = {
  width: number;
  row: number;
} & HTMLAttributes<HTMLDivElement>;

const DraftGridRow: FC<Props> = ({ width, row, ...props }: Props) => {
  return (
    <div
      className={clsx('flex', 'border-x-wd-info', 'border-x-[0.5px]')}
      {...props}
    >
      {new Array(width).fill(0).map((_, index) => (
        <DraftGridCell
          key={`col: ${index}`}
          row={row}
          col={index}
        />
      ))}
    </div>
  );
};

export { DraftGridRow };
