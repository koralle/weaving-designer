import type { Meta, StoryObj } from '@storybook/react';

import { DraftGridContainer } from './DraftGridContainer';

const meta = {
  title: 'Design System/Feature Components/Containers/DraftGridContainer',
  component: DraftGridContainer,
  tags: ['autodocs'],
  argTypes: {
    gridWidth: { control: { type: 'range', min: 4, max: 100, step: 1 } },
    gridHeight: { control: { type: 'range', min: 4, max: 100, step: 1 } },
  },
  args: {
    gridWidth: 32,
    gridHeight: 32,
  },
} satisfies Meta<typeof DraftGridContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    gridWidth: 32,
    gridHeight: 32,
  },
};

export const Large: Story = {
  args: {
    gridWidth: 48,
    gridHeight: 48,
  },
};

export const XLarge: Story = {
  args: {
    gridWidth: 100,
    gridHeight: 100,
  },
};

export const Small: Story = {
  args: {
    gridWidth: 16,
    gridHeight: 16,
  },
};

export const XSmall: Story = {
  args: {
    gridWidth: 4,
    gridHeight: 4,
  },
};
