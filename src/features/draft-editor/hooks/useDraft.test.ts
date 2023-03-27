import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { describe, expect, it } from 'vitest';

import { draftGridSizeAtom } from '../atoms/draftGrid';

describe('hoge', () => {
  it('fuga', () => {
    const { result } = renderHook(() => useRecoilState(draftGridSizeAtom), {
      wrapper: ({ children }: { children: ReactNode }) =>
        RecoilRoot({
          children,
          initializeState: ({ set }) => {
            set(draftGridSizeAtom, { width: 4, height: 4 });
          },
        }),
    });

    const [draftGridSize, setDraftGridSize] = result.current;

    expect(draftGridSize.width).toBe(4);
    expect(draftGridSize.height).toBe(4);

    act(() => {
      setDraftGridSize(_ => ({
        width: 5,
        height: 5,
      }));
    });

    expect(draftGridSize.width).toBe(5);
  });
});
