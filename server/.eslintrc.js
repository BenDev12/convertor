module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-new':'off'
  }
};
