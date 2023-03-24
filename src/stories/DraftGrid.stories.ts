import type { Meta, StoryObj } from '@storybook/react';

import { DraftGrid } from '../features/components/DraftGrid';
import { defaultHeight, defaultWidth } from '../schemas/Draft';

const meta = {
  title: 'Design System/Feature Component/DraftGrid',
  component: DraftGrid,
  tags: ['autodocs'],
  args: {
    width: defaultWidth,
    height: defaultHeight,
  },
} satisfies Meta<typeof DraftGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: defaultWidth,
    height: defaultHeight,
  },
};
