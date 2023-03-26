import { atomFamily, selectorFamily } from 'recoil';

import {
  defaultHeddle,
  defaultHeight,
  defaultTreadle,
  defaultWidth,
  DraftHeightSchema,
  DraftSchema,
  DraftWidthSchema,
  HeddleSchema,
  ThreadDirectionSchema,
  TieUpPositionSchema,
  TreadleSchema,
} from '../../schemas/Draft';

type DraftId = string;

const draftWidthState = atomFamily<DraftWidthSchema, DraftId>({
  key: 'state-draft-width',
  default: defaultWidth,
});

const draftHeightState = atomFamily<DraftHeightSchema, DraftId>({
  key: 'state-draft-height',
  default: defaultHeight,
});

const draftTieUpPositionState = atomFamily<TieUpPositionSchema, DraftId>({
  key: 'state-draft-tie-up-position',
  default: 'LeftUp',
});

const draftThreadDirectionState = atomFamily<ThreadDirectionSchema, DraftId>({
  key: 'state-draft-thread-direction',
  default: 'Up',
});

const draftTreadleState = atomFamily<TreadleSchema, DraftId>({
  key: 'state-draft-treadle',
  default: defaultTreadle,
});

const draftHeddleState = atomFamily<HeddleSchema, DraftId>({
  key: 'state-draft-heddle',
  default: defaultHeddle,
});

const draftState = selectorFamily<DraftSchema & { id: DraftId }, DraftId>({
  key: 'state-draft',
  get:
    draftId =>
      ({ get }) => {
        return {
          id: draftId,
          width: get(draftWidthState(draftId)),
          height: get(draftHeightState(draftId)),
          tieUpPosition: get(draftTieUpPositionState(draftId)),
          threadDirection: get(draftThreadDirectionState(draftId)),
          treadle: get(draftTreadleState(draftId)),
          heddle: get(draftHeddleState(draftId)),
        };
      },
});

export { draftState };
