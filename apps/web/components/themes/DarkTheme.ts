import { createTheme } from '@mui/material';

import { BaseTheme } from './BaseTheme';

/**
 * The dark theme.
 */
export const DarkTheme = createTheme({
  ...BaseTheme,
  palette: {
    mode: 'dark',
  },
});
