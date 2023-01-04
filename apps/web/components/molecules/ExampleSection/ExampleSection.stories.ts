import type { Meta, StoryObj } from '@storybook/react';

import { ExampleSection } from './ExampleSection';

export default {
  title: 'Molecules/ExampleSection',
  component: ExampleSection,
} as Meta<typeof ExampleSection>;

export const Story: StoryObj<typeof ExampleSection> = { args: { label: 'Label' } };
