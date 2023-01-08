import App, { type AppContext, AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { getNextEnvironment } from 'common/env';
import { createEmotionCache } from 'common/mui';
import { getThemeType } from 'common/theme';

import { EnvironmentProvider, ThemeProvider } from 'components/provider';
import { DefaultThemeType, ThemeType } from 'components/themes';

/**
 * Client-side cache styles, shared for the whole session of the user in the browser.
 */
const clientSideEmotionCache = createEmotionCache();

interface NextAppProps extends AppProps {
  renderedTheme: ThemeType;
  emotionCache?: typeof clientSideEmotionCache;
}

export default function _App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
  renderedTheme,
}: NextAppProps) {
  const env = getNextEnvironment();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color-dark" content="#F3F6F9" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color-light" content="#F3F6F9" media="(prefers-color-scheme: light)" />

        <title>Mina Governance</title>
      </Head>

      <EnvironmentProvider environment={env}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider value={renderedTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </EnvironmentProvider>
    </>
  );
}

_App.getInitialProps = async (_ctx: AppContext) => {
  const appProps = await App.getInitialProps(_ctx);
  const { ctx } = _ctx;

  const cookie = ctx.req?.headers.cookie;

  return {
    ...appProps,
    renderedTheme: getThemeType(cookie ? cookie : DefaultThemeType),
  };
};
