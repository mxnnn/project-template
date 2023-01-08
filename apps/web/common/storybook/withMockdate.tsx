import mockdate from 'mockdate';

import { StoryContext, StoryFn } from '@storybook/react';

/**
 * Storybook decorator to mock the system date.
 */
export const withMockdate = (Story: StoryFn, { parameters }: StoryContext) => {
  mockdate.reset();

  if (parameters.mockdate) {
    mockdate.set(parameters.mockdate);
  }

  return <Story />;
};