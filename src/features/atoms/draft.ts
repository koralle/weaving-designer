import { atom } from 'recoil';

import { defaultDraft, DraftSchema } from '../../schemas/Draft';

const draftState = atom<DraftSchema>({
  key: 'draft',
  default: defaultDraft,
});

export { draftState };
