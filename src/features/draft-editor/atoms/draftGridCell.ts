import { atomFamily } from 'recoil';

type DraftGridCellState = {
  isActive: boolean;
  isLongPressed: boolean;
  hasPointerLeft: boolean;
};

const draftGridCellAtomFamily = atomFamily<DraftGridCellState, { row: number; col: number }>({
  key: 'draftGridCellAtomFamily',
  default: {
    isActive: false,
    isLongPressed: false,
    hasPointerLeft: false,
  },
});

export { draftGridCellAtomFamily };
