import { useRecoilCallback } from 'recoil';

import { draftGridSizeAtom } from '../atoms/draftGrid';
import { draftGridCellAtomFamily } from '../atoms/draftGridCell';

const useDraftGridSize = () => {
  const updateDraftGridSize = useRecoilCallback(
    ({ snapshot, reset, set }) =>
      async ({ width, height }: { width: number; height: number }) => {
        const currentSize = await snapshot.getPromise(draftGridSizeAtom);

        if (currentSize.width === width && currentSize.height === height) {
          return;
        }

        //
        if (currentSize.height > height) {
          for (let row = height; row < currentSize.height; row++) {
            for (let col = 0; col < currentSize.width; col++) {
              reset(draftGridCellAtomFamily({ row: row, col: col }));
            }
          }
        }

        if (currentSize.width > width) {
          for (let row = 0; row < currentSize.height; row++) {
            for (let col = width; col < currentSize.width; col++) {
              reset(draftGridCellAtomFamily({ row: row, col: col }));
            }
          }
        }

        set(draftGridSizeAtom, { width: width, height: height });
      }
  );

  return {
    updateDraftGridSize,
  };
};

export { useDraftGridSize };
