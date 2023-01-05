import { z } from 'zod';

/**
 * The supported release stages of the application.
 *
 * **IMPORTANT:** This is not the same as `NODE_ENV`.
 */
export const APP_RELEASE_STAGES = ['development', 'staging', 'production'] as const;
export const NODE_ENV = ['development', 'test', 'production'] as const;

/**
 * The supported release stages of the application.
 */
export type AppReleaseStage = typeof APP_RELEASE_STAGES[number];
export type NodeEnv = typeof NODE_ENV[number];

export type Environment = {
  env: NodeEnv;
  RELEASE_STAGE: AppReleaseStage;
};

/**
 * Environment variables available to the Next.js app.
 */
export interface NextEnvironment {
  NODE_ENV: Environment['env'];
  NEXT_PUBLIC_RELEASE_STAGE: Environment['RELEASE_STAGE'];
}

const NextEnvironmentSchema = z.object({
  NODE_ENV: z.enum(NODE_ENV).default('development'),
  NEXT_PUBLIC_RELEASE_STAGE: z.enum(APP_RELEASE_STAGES).default('development'),
});

/**
 * Makes the environment variables available to the Next.js app.
 */
export const getNextEnvironment = (): Environment => {
  const env = NextEnvironmentSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_RELEASE_STAGE: process.env.NEXT_PUBLIC_RELEASE_STAGE,
  });

  if (!env.success) {
    throw new Error(`Invalid configuration. ${env.error}`);
  }

  return {
    env: env.data.NODE_ENV,
    RELEASE_STAGE: env.data.NEXT_PUBLIC_RELEASE_STAGE,
  };
};
