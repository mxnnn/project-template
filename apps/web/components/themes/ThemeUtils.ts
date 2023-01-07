import { Theme } from '@emotion/react';

import { DarkTheme } from './DarkTheme';
import { DefaultThemeType, getDefaultTheme, ThemeType } from './DefaultTheme';
import { LightTheme } from './LightTheme';

export interface ThemeValue {
  key: ThemeType;
  value: Theme;
}

export const getThemeType = (input: string): ThemeType => {
  const match = input.match(/theme=(dark|light)/);
  return match ? (match[1] as ThemeType) : DefaultThemeType;
};

export const getThemeValue = (input: ThemeType): ThemeValue => {
  const map: { [key: string]: ThemeValue } = {
    dark: { key: 'dark', value: DarkTheme },
    light: { key: 'light', value: LightTheme },
  };
  return input in map ? map[input] : getDefaultTheme();
};
