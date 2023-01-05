import type { AppProps } from 'next/app';

import { EnvironmentProvider, getNextEnvironment } from '@shared/env';

export default function App({ Component, pageProps }: AppProps) {
  const env = getNextEnvironment();

  return (
    <EnvironmentProvider environment={env}>
      <Component {...pageProps} />
    </EnvironmentProvider>
  );
}
