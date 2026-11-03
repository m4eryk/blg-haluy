export default {
  '*.{ts,js,cjs,mjs}': [
    'eslint --fix',
    'eslint',
  ],
  '*.ts': () => 'npm run typecheck',
};
