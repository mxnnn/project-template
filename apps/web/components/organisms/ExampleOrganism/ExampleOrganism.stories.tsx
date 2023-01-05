import type { Meta, StoryObj } from '@storybook/react';

import { ExampleOrganism, ExampleOrganismProps } from './ExampleOrganism';

export default {
  title: 'Organisms/ExampleOrganism',
  component: ExampleOrganism,
} as Meta<typeof ExampleOrganism>;

export const Story: StoryObj<ExampleOrganismProps> = { args: { default: true } };
