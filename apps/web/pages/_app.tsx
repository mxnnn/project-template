import type { AppProps } from 'next/app';

import createEmotionCache, { type EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { EnvironmentProvider, getNextEnvironment } from '@shared/env';

/**
 * Client-side cache styles, shared for the whole session of the user in the browser.
 */
const clientSideEmotionCache = createEmotionCache({ key: 'css', prepend: true });

interface NextAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: NextAppProps) {
  const env = getNextEnvironment();

  return (
    <EnvironmentProvider environment={env}>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </EnvironmentProvider>
  );
}
