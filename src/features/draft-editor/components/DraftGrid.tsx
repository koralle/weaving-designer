import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { DraftGridCell } from './DraftGridCell';

type Props = {
  gridWidth: number;
  gridHeight: number;
} & HTMLAttributes<HTMLDivElement>;

const DraftGrid: FC<Props> = ({ gridWidth, gridHeight, className, ...props }: Props) => {
  return (
    <>
      <div
        className={clsx(className, 'border-y-wd-info', 'border-y-[0.5px]', 'w-fit')}
        {...props}
      >
        {new Array(gridHeight).fill(0).map((_, row) => (
          <div
            className={clsx(className, 'flex', 'border-x-wd-info', 'border-x-[0.5px]')}
            key={`row:${row}`}
          >
            {new Array(gridWidth).fill(0).map((_, col) => (
              <DraftGridCell
                row={row}
                col={col}
                key={`row:${row},col:${col}`}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export { DraftGrid };
