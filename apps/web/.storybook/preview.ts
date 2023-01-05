import { withMockdate } from '../shared/storybook';

export const decorators = [withMockdate];

export default {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Layouts', 'Themes'],
    },
  },
};
