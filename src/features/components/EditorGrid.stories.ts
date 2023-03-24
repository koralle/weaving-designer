import type { Meta, StoryObj } from '@storybook/react';

import { EditorGrid } from './EditorGrid';

const meta = {
  title: 'Design System/Feature Components/EditorGrid',
  component: EditorGrid,
  tags: ['autodocs'],
  args: {
    width: 16,
    height: 16,
  },
} satisfies Meta<typeof EditorGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 16,
    height: 16,
  },
};
