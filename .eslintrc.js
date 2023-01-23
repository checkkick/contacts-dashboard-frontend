module.exports = {
  root: true,
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'no-param-reassign': [2, { props: false }],
    'no-restricted-syntax': [2, 'WithStatement'],
  },
};
