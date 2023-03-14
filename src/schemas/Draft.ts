import { z } from 'zod';

const minWidth = 1 as const;
const minHeight = 1 as const;
const mintreadle = 1 as const;
const minHeddle = 1 as const;

const defaultWidth = 4 as const;
const defaultHeight = 4 as const;
const defaultTreadle = 4 as const;
const defaultHeddle = 4 as const;

// Schema
const draftWidthSchema = z.number().min(minWidth).default(defaultWidth);
const draftHeightSchema = z.number().min(minHeight).default(defaultHeight);

const tieUpPositionSchema = z.enum(['LeftUp', 'RightUp', 'RightBottom', 'LeftBottom']).default('LeftUp');
const threadDirectionSchema = z.enum(['Up', 'Down']).default('Up');

const treadleSchema = z.number().min(mintreadle).default(defaultTreadle);
const heddleSchema = z.number().min(minHeddle).default(defaultHeddle);

const draftSchema = z
  .object({
    width: draftWidthSchema,
    height: draftHeightSchema,
    tieUpPosition: tieUpPositionSchema,
    threadDirection: threadDirectionSchema,
    treadle: treadleSchema,
    heddle: heddleSchema,
  })
  .required();

// Schema Type
type DraftWidthSchema = z.infer<typeof draftWidthSchema>;
type DraftHeightSchema = z.infer<typeof draftHeightSchema>;
type TieUpPositionSchema = z.infer<typeof tieUpPositionSchema>;
type ThreadDirectionSchema = z.infer<typeof threadDirectionSchema>;
type TreadleSchema = z.infer<typeof treadleSchema>;
type HeddleSchema = z.infer<typeof heddleSchema>;

type DraftSchema = z.infer<typeof draftSchema>;

const defaultDraft = {
  width: defaultWidth,
  height: defaultHeight,
  treadle: defaultTreadle,
  heddle: defaultHeddle,
  tieUpPosition: 'LeftUp',
  threadDirection: 'Up',
} satisfies DraftSchema;

export {
  defaultDraft,
  defaultHeddle,
  defaultHeight,
  defaultTreadle,
  defaultWidth,
  draftHeightSchema,
  draftSchema,
  draftWidthSchema,
  heddleSchema,
  minHeddle,
  minHeight,
  mintreadle,
  minWidth,
  threadDirectionSchema,
  tieUpPositionSchema,
  treadleSchema,
};

export type {
  DraftHeightSchema,
  DraftSchema,
  DraftWidthSchema,
  HeddleSchema,
  ThreadDirectionSchema,
  TieUpPositionSchema,
  TreadleSchema,
};
