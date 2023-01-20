// @ts-check
import { z } from 'zod';

/**
 * Main environment variable schema.
 * By default, environment variables are only available in the Node.js environment.
 * In order to additionally expose a variable to the browser, prefix the variable with NEXT_PUBLIC.
 */
export const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXT_PUBLIC_RELEASE_STAGE: z.enum(['development', 'staging', 'production']),
});

/**
 * Environment variable declarations based on the schema help structure your environment variables programmatically.
 * @type {{ [k in keyof z.infer<typeof schema>]: z.infer<typeof schema>[k] | undefined }}
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_RELEASE_STAGE: process.env.NEXT_PUBLIC_RELEASE_STAGE,
};

export const formatZodError = (/** @type z.ZodFormattedError<Map<string, string>, string> */ errors) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;

      return;
    })
    .filter(Boolean);

const safeParsedEnv = schema.safeParse(env);

if (!safeParsedEnv.success) {
  console.error('❌ Invalid environment variables:\n', ...formatZodError(safeParsedEnv.error.format()));
  throw new Error('Invalid environment variables');
}
