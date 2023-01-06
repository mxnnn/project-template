import { createTheme } from '@mui/material';

import { BaseTheme } from './BaseTheme';

/**
 * The light theme.
 */
export const LightTheme = createTheme({
  ...BaseTheme,
  palette: {
    mode: 'light',
  },
});
