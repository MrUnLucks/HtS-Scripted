module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    './.eslintrc-auto-import.json',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
