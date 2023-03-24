import type { Meta, StoryObj } from '@storybook/react';

import { TieUpGrid } from './TieUpGrid';

const meta = {
  title: 'Design System/Feature Components/TieUpGrid',
  component: TieUpGrid,
  tags: ['autodocs'],
  args: {
    treadle: 8,
    heddle: 8,
  },
} satisfies Meta<typeof TieUpGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    treadle: 8,
    heddle: 8,
  },
};
