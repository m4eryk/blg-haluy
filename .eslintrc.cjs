/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.cjs',
    'lint-staged.config.js',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.ts', '.js'],
      },
    },
    react: {
      version: '18.3',
    },
  },
  overrides: [
    {
      files: ['src/experiments/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
