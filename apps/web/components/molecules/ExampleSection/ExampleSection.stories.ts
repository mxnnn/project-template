import type { Meta, StoryObj } from '@storybook/react';

import { ExampleSection, ExampleSectionProps } from './ExampleSection';

export default {
  title: 'Molecules/ExampleSection',
  component: ExampleSection,
} as Meta<typeof ExampleSection>;

export const Story: StoryObj<ExampleSectionProps> = { args: { empty: true } };
