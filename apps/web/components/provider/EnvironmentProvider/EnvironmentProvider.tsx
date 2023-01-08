import { useContext } from 'react';
import { createContext, FC } from 'react';

import { Environment, getNextEnvironment } from '@common/env';

export const EnvironmentContext = createContext<Environment>(getNextEnvironment());

export interface EnvironmentProviderProps {
  environment: Environment;
  children: JSX.Element;
}

/**
 * Provides context for environment variables.
 */
export const EnvironmentProvider: FC<EnvironmentProviderProps> = ({ children, environment }) => (
  <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
);

/**
 * Provides access to environment variables.
 */
export const useEnvironment = () => {
  return useContext(EnvironmentContext);
};
