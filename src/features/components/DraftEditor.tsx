import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { useRecoilValue } from 'recoil';

import { draftState } from '../atoms/draft';
import { EditorGrid } from './EditorGrid';
import { TieUpGrid } from './TieUpGrid';
import { WarpColorPalette } from './WarpColorPalette';
import { WarpGrid } from './WarpGrid';
import { WeftColorPalette } from './WeftColorPalette';
import { WeftGrid } from './WeftGrid';

type Props = HTMLAttributes<HTMLDivElement>;

/**
 *r@example tieUpPosition = 'LeftUp'
 * | EMPTY             | EMPTY | Warp ColorPalette |
 * | EMPTY             | TieUp | Warp              |
 * | Weft ColorPalette | Weft  | Editor            |
 *
 * @example tieUpPosition = 'RightUp'
 * | Warp ColorPalette | EMPTY | EMPTY             |
 * | Warp              | TieUp | EMPTY             |
 * | Editor            | Weft  | Weft ColorPalette |
 *
 * @example tieUpPosition = 'RightBottom'
 * | Editor            | Weft  | Weft ColorPalette |
 * | Warp              | TieUp | EMPTY             |
 * | Warp ColorPalette | EMPTY | EMPTY             |
 *
 * @example tieUpPosition = 'LeftBottom'
 * | Weft ColorPalette | Weft  | Editor            |
 * | EMPTY             | TieUp | Warp              |
 * | EMPTY             | EMPTY | Warp ColorPalette |
 */
const DraftEditor: FC<Props> = ({ className, ...props }: Props) => {
  const { width, height, tieUpPosition, treadle, heddle } = useRecoilValue(draftState);

  return (
    <div
      className={clsx(className, 'flex', 'flex-col', 'w-fit', 'h-fit', 'gap-5')}
      {...props}
    >
      <div
        className={clsx(
          'flex',
          'gap-5',
          { 'justify-end': ['LeftUp', 'LeftBottom'].includes(tieUpPosition) },
          { 'justify-start': ['RightUp', 'RightBottom'].includes(tieUpPosition) }
        )}
      >
        <div>
          {tieUpPosition === 'LeftUp' ? null : tieUpPosition === 'RightUp' ? (
            <WarpColorPalette width={width} />
          ) : tieUpPosition === 'RightBottom' ? (
            <EditorGrid
              width={width}
              height={height}
            />
          ) : (
            <WeftColorPalette height={height} />
          )}
        </div>
        <div>
          {['LeftUp', 'RightUp'].includes(tieUpPosition) ? null : (
            <WeftGrid
              heddle={heddle}
              height={height}
            />
          )}
        </div>
        <div>
          {tieUpPosition === 'LeftUp' ? (
            <WarpColorPalette
              width={width}
              className={clsx('ml-auto')}
            />
          ) : tieUpPosition === 'RightUp' ? null : tieUpPosition === 'RightBottom' ? (
            <WeftColorPalette height={height} />
          ) : (
            <EditorGrid
              width={width}
              height={height}
            />
          )}
        </div>
      </div>
      <div
        className={clsx(
          'flex',
          'gap-5',
          { 'justify-end': ['LeftUp', 'LeftBottom'].includes(tieUpPosition) },
          { 'justify-start': ['RightUp', 'RightBottom'].includes(tieUpPosition) }
        )}
      >
        <div>
          {['RightUp', 'RightBottom'].includes(tieUpPosition) ? (
            <WarpGrid
              width={width}
              treadle={treadle}
            />
          ) : null}
        </div>
        <div>
          <TieUpGrid
            treadle={treadle}
            heddle={heddle}
          />
        </div>
        <div className={clsx()}>
          {['LeftUp', 'LeftBottom'].includes(tieUpPosition) ? (
            <WarpGrid
              width={width}
              treadle={treadle}
            />
          ) : null}
        </div>
      </div>
      <div
        className={clsx(
          'flex',
          'gap-5',
          { 'justify-end': ['LeftUp', 'LeftBottom'].includes(tieUpPosition) },
          { 'justify-start': ['RightUp', 'RightBottom'].includes(tieUpPosition) }
        )}
      >
        <div className={clsx('gap-5')}>
          {tieUpPosition === 'LeftUp' ? (
            <WeftColorPalette height={height} />
          ) : tieUpPosition === 'RightUp' ? (
            <EditorGrid
              width={width}
              height={height}
            />
          ) : tieUpPosition === 'RightBottom' ? (
            <WarpColorPalette width={width} />
          ) : null}
        </div>
        <div>
          {['LeftBottom', 'RightBottom'].includes(tieUpPosition) ? null : (
            <WeftGrid
              heddle={heddle}
              height={height}
            />
          )}
        </div>
        <div>
          {tieUpPosition === 'LeftUp' ? (
            <EditorGrid
              width={width}
              height={height}
            />
          ) : tieUpPosition === 'RightUp' ? (
            <WeftColorPalette height={height} />
          ) : tieUpPosition === 'RightBottom' ? null : (
            <WarpColorPalette width={width} />
          )}
        </div>
      </div>
    </div>
  );
};

export { DraftEditor };
