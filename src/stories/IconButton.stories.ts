import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../components/IconButton';

const meta = {
  title: 'Design System/Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    appearance: 'secondary',
    icon: 'mdi:home',
    children: 'IconButton',
    className: '',
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: 'primary',
    children: 'IconButton',
    className: '',
  },
};

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    children: 'IconButton',
    className: '',
  },
};

export const Info: Story = {
  args: {
    appearance: 'info',
    children: 'IconButton',
    className: '',
  },
};

export const Destructive: Story = {
  args: {
    appearance: 'destructive',
    children: 'IconButton',
    className: '',
  },
};
