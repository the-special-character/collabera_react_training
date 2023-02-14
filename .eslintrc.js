module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'default-param-last': 0,
  },
};
