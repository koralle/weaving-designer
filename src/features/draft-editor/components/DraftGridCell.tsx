import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { useRecoilValue } from 'recoil';

import { draftGridBackgroundColorAtomFamily } from '../atoms/draftGrid';
import { draftGridCellAtomFamily } from '../atoms/draftGridCell';
import { useDraftGridCell } from '../hooks/useDraftGridCell';

type Props = {
  row: number;
  col: number;
} & HTMLAttributes<HTMLButtonElement>;

const DraftGridCell: FC<Props> = ({ row, col, className, ...props }: Props) => {
  const draftGridCellState = useRecoilValue(draftGridCellAtomFamily({ row: row, col: col }));
  const backgroundColor = useRecoilValue(draftGridBackgroundColorAtomFamily);

  const { handleOnMouseDown, handleOnMouseLeave, handleOnMouseEnter, handleOnMouseUp } = useDraftGridCell({
    row: row,
    col: col,
  });

  return (
    <button
      type='button'
      tabIndex={-1}
      className={clsx(className, 'w-4', 'h-4', 'border-wd-info', 'border-[0.5px]')}
      {...props}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
      style={{ backgroundColor: draftGridCellState.isActive ? backgroundColor : 'unset' }}
    />
  );
};

export { DraftGridCell };
