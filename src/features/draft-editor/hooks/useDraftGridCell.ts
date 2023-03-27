import { useRef } from 'react';
import { useRecoilState } from 'recoil';

import { draftGridCellAtomFamily } from '../atoms/draftGridCell';
import { draggingDraftGridCellAtom } from '../atoms/draggingDraftGridCell';

const useDraftGridCell = ({ row, col }: { row: number; col: number }) => {
  const [draggingDraftGridCellState, setDraggingDraftGridCellState] = useRecoilState(draggingDraftGridCellAtom);
  const [draftGridCellState, setDraftGridCellState] = useRecoilState(draftGridCellAtomFamily({ row: row, col: col }));

  type TimerID = number;

  const timeRef = useRef<TimerID | undefined>(undefined);

  const startLongPressTimer = () => {
    timeRef.current = window.setTimeout(() => {
      setDraftGridCellState(prev => ({ ...prev, isLongPressed: true, isActive: !prev.isActive }));
      setDraggingDraftGridCellState(prev => ({ ...prev, isDragging: true }));
    }, 200);
  };

  const handleOnMouseDown = () => {
    setDraggingDraftGridCellState(prev => ({ ...prev, isDragging: false }));
    setDraftGridCellState(prev => ({ ...prev, isLongPressed: false }));
    startLongPressTimer();
  };

  const handleOnMouseUp = () => {
    window.clearTimeout(timeRef.current);
    if (
      !draftGridCellState.isLongPressed &&
      !draftGridCellState.hasPointerLeft &&
      !draggingDraftGridCellState.isDragging &&
      !draggingDraftGridCellState.hasPointerExitedDraftGridOnce
    ) {
      setDraftGridCellState(prev => ({ ...prev, isActive: !prev.isActive }));
    }
    setDraggingDraftGridCellState(prev => ({ ...prev, isDragging: false, hasPointerExitedDraftGridOnce: false }));
  };

  const handleOnMouseEnter = () => {
    setDraftGridCellState(prev => ({ ...prev, hasPointerLeft: false }));
    if (draggingDraftGridCellState.isDragging && !draggingDraftGridCellState.hasPointerExitedDraftGridOnce) {
      setDraftGridCellState(prev => ({ ...prev, isActive: !prev.isActive }));
    }
  };

  const handleOnMouseLeave = () => {
    window.clearTimeout(timeRef.current);
    setDraftGridCellState(prev => ({ ...prev, hasPointerLeft: true }));
  };

  return {
    setDraftGridCellState,
    handleOnMouseDown,
    handleOnMouseLeave,
    handleOnMouseUp,
    handleOnMouseEnter,
  };
};

export { useDraftGridCell };
