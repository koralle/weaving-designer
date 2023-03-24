import type { Meta, StoryObj } from '@storybook/react';

import { WarpColorPalette } from './WarpColorPalette';

const meta = {
  title: 'Design System/Feature Components/WarpColorPalette',
  component: WarpColorPalette,
  tags: ['autodocs'],
  args: {
    width: 16,
  },
} satisfies Meta<typeof WarpColorPalette>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 16,
  },
};
