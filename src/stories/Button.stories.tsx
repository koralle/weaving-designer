import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    className: 'bg-app-primary-color-value',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    className: 'bg-app-secondary-color-value',
  },
};
