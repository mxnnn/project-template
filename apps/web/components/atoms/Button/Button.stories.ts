import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

export const Story: StoryObj<typeof Button> = { args: { label: 'Label' } };
