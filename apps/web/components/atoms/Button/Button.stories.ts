import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

export const Story: StoryObj<ButtonProps> = { args: { default: true } };
