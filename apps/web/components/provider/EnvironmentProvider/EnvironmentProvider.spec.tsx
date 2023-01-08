import { getNextEnvironment } from 'common/env';

import { render } from '@testing-library/react';

import { EnvironmentProvider } from './EnvironmentProvider';

describe('Provider', () => {
  it('sample', () => {
    const env = getNextEnvironment();
    render(
      <EnvironmentProvider environment={env}>
        <div>Hello!</div>
      </EnvironmentProvider>
    );
  });
});
