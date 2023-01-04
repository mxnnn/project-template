import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules/Button',
  component: Button,
} as Meta<typeof Button>;

export const CSF3Story: StoryObj<typeof Button> = { args: { label: 'Label' } };
