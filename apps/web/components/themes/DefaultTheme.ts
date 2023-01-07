import { Theme } from '@mui/material/styles';

import { DarkTheme } from './DarkTheme';
import { ThemeValue } from './ThemeUtils';

export type ThemeType = 'light' | 'dark';

export const DefaultTheme: Theme = DarkTheme;
export const DefaultThemeType: ThemeType = 'dark';

export const getDefaultTheme = (): ThemeValue => {
  return {
    key: DefaultThemeType,
    value: DefaultTheme,
  };
};
