module.exports = {
  ...require('eslint-config-custom/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
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
        groups: [
          ['^react'],
          ['^next'],
          ['^@mui|@emotion|@storybook'],
          ['^common'],
          ['^components'],
          ['reflect-metadata$'],
          ['^\\w'],
          ['^@\\w'],
          ['^\\..\\/'],
          ['^\\.\\/'],
        ],
      },
    ],
  },
};
