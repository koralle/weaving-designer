import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { Tooltip } from '../../../components/Tooltip';

type CellPositionProps = {
  row: number;
  col: number;
};

type Props = CellPositionProps & HTMLAttributes<HTMLButtonElement>;

const DraftGridCell: FC<Props> = ({ row, col, ...props }: Props) => {
  return (
    <Tooltip content={`row: ${row}, col: ${col}`}>
      <button
        tabIndex={-1}
        type='button'
        {...props}
        className={clsx('w-4', 'h-4', 'border-wd-info', 'border-[0.5px]')}
      />
    </Tooltip>
  );
};

export { DraftGridCell };
