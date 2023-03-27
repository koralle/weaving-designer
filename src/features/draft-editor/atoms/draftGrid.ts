import { atom } from 'recoil';

const draftGridBackgroundColorAtomFamily = atom<string>({
  key: 'draftGridBackgroundColorAtomFamily',
  default: '#ff0000',
});

const draftGridSizeAtom = atom<{ width: number; height: number }>({
  key: 'draftGridSizeAtom',
  default: {
    width: 32,
    height: 32,
  },
});

export { draftGridBackgroundColorAtomFamily, draftGridSizeAtom };
