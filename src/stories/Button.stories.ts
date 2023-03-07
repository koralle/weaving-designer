import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    appearance: "secondary",
    children: "Button",
    className: "",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "Button",
    className: "",
  },
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "Button",
    className: "",
  },
};

export const Info: Story = {
  args: {
    appearance: "info",
    children: "Button",
    className: "",
  },
};

export const Destructive: Story = {
  args: {
    appearance: "destructive",
    children: "Button",
    className: "",
  },
};
