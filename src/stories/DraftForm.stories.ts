import { Meta, StoryObj } from '@storybook/react';

import { DraftForm } from '../features/components/DraftForm';

const meta = {
  title: 'Design System/ComponentGroups/DraftForm',
  component: DraftForm,
  tags: ['autodocs'],
} satisfies Meta<typeof DraftForm>;

export default meta;

type Story = StoryObj<typeof DraftForm>;

export const First: Story = {};
