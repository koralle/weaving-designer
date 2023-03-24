import type { Meta, StoryObj } from '@storybook/react';

import { SelectField } from '../components/Select';

const meta = {
  title: 'Design System/Atoms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  args: {
    label: 'Fruits',
    placeholder: 'Select a fruit...',
    itemList: ['apple', 'orange', 'banana'],
  },
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Fruits',
    placeholder: 'Select a fruit...',
    itemList: ['apple', 'orange', 'banana'],
  },
};
