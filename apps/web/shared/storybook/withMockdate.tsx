import mockdate from 'mockdate';

import { Story, StoryContext } from '@storybook/react';

/**
 * Storybook decorator to mock the system date.
 */
export const withMockdate = (Story: Story, { parameters }: StoryContext) => {
  mockdate.reset();

  if (parameters.mockdate) {
    mockdate.set(parameters.mockdate);
  }

  return <Story />;
};
