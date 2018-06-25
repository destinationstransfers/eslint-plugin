/*
* Destinations Transfers Shareable ESLint Config:
* http://eslint.org/docs/developer-guide/shareable-configs
*/

'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'jsdoc',
    'jest',
    'prettier',
    'node',
    'import',
    'optimize-regex',
    'sort-requires',
    'eslint-comments',
  ],
  rules: {
    // code quality
    complexity: ['error', { max: 20 }],
    'max-lines': [
      'warn',
      { max: 600, skipComments: true, skipBlankLines: true },
    ],
    'max-depth': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 30, { ignoreTopLevelFunctions: true }],
    'max-nested-callbacks': ['error', 3],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', 'future'], location: 'start' },
    ],
    'optimize-regex/optimize-regex': 'warn',
    'eslint-comments/disable-enable-pair': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    // language features
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'getter-return': 'error',
    'arrow-parens': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'valid-jsdoc': 'off',
    'no-extra-bind': 'error',
    'no-sync': 'warn',
    'no-confusing-arrow': 'off',
    'require-await': 'error',
    'no-restricted-syntax': 'off',
    'no-throw-literal': 'error',
    'no-restricted-globals': 'off',
    'spaced-comment': 'off',
    camelcase: 'off',
    'no-continue': 'off',
    // presentation
    'sort-requires/sort-requires': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': ['error', { ignoreCase: true }],
    indent: 'off', // prettier will do it better
    'no-underscore-dangle': 'off', // MongoDB is hard with it
    // jest
    'jest/no-disabled-tests': 'off', // will allow test.skip
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/valid-expect': 'error',
    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
    // eslint-plugin-jsdoc - https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-configuration
    'jsdoc/check-param-names': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/newline-after-description': 1,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-hyphen-before-param-description': 2,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-returns-type': 1,
    'node/no-unpublished-require': 'off',
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js'],
  },
  globals: {
    URL: false,
    URLSearchParams: false,
  },
  overrides: [
    {
      files: ['__tests__/*.js', '*.test.js'],
      env: {
        jest: true,
        browser: true,
      },
      rules: {
        // we need unused vars in tests for mocking sometimes
        'no-unused-vars': 'off',
        // it's ok to write very long integration tests
        'max-statements': 'off',
      },
    },
  ],
};
