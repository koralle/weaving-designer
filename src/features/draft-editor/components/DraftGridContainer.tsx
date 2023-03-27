import { clsx } from 'clsx';
import type { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { draggingDraftGridCellAtom } from '../atoms/draggingDraftGridCell';
import { DraftGrid } from './DraftGrid';

type Props = {
  gridWidth: number;
  gridHeight: number;
};

const DraftGridContainer: FC<Props> = ({ gridWidth, gridHeight }: Props) => {
  const setDraggingDraftGridCellState = useSetRecoilState(draggingDraftGridCellAtom);

  const onMouseLeave = () => {
    console.log('onMouseLeave');
    setDraggingDraftGridCellState(prev => ({ ...prev, isDragging: false, hasPointerExitedDraftGridOnce: true }));
  };

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        className={clsx('p-10', 'w-fit', 'h-fit')}
      >
        <DraftGrid
          gridWidth={gridWidth}
          gridHeight={gridHeight}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </>
  );
};

export { DraftGridContainer };
