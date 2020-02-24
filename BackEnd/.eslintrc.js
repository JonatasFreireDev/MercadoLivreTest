module.exports = {
   env: {
      es6: true,
      node: true,
   },
   extends: ['airbnb-base', 'prettier'],
   plugins: ['prettier', 'eslint-plugin-import-helpers'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   rules: {
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'linebreak-style': 'off',
      'import-helpers/order-imports': [
         'warn',
         {
            newlinesBetween: 'always', // new line between groups
            groups: [
               '/^express/',
               'module',
               '/^~/',
               ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
         },
      ],
   },
};
