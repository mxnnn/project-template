import { ThemeOptions } from '@mui/material';

/**
 * The default typography theme.
 */
const Typography: ThemeOptions = {
  typography: {
    h1: {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 700,
    },
  },
};

export const BaseTheme: ThemeOptions = {
  ...Typography,
};
