import { atom } from 'recoil';

type DragggingDraftGridCellState = {
  isDragging: boolean;
  hasPointerExitedDraftGridOnce: boolean;
};

const draggingDraftGridCellAtom = atom<DragggingDraftGridCellState>({
  key: 'draggingDraftGridCellAtom',
  default: {
    isDragging: false,
    hasPointerExitedDraftGridOnce: false,
  },
});

export { draggingDraftGridCellAtom };
