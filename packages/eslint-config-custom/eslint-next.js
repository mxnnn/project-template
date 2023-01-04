module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', '@next/eslint-plugin-next', 'simple-import-sort', 'unused-imports'],
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['reflect-metadata$'], ['^\\w'], ['^@\\w'], ['^\\..\\/'], ['^\\.\\/']],
      },
    ],
  },
};
