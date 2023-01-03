export * from '@testing-library/react';

export const stub = <T,>(value: Partial<T> = {}): T => {
  return value as T;
};
