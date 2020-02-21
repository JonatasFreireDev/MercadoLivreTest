module.exports = {
   env: {
      browser: true,
      es6: true,
   },
   extends: ['airbnb', 'prettier', 'prettier/react'],
   parser: 'babel-eslint',
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: [
      'prettier',
      'react',
      'jsx-a11y',
      'import',
      'react-hooks',
      'eslint-plugin-import-helpers',
      'babel-plugin-root-import',
   ],
   rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
         'error',
         { extensions: ['.js', '.jsx'] },
      ],
      'import/prefer-default-export': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'react-native/no-raw-text': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import-helpers/order-imports': [
         'warn',
         {
            newlinesBetween: 'always', // new line between groups
            groups: [
               '/^react/',
               'module',
               '/^~/',
               ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
         },
      ],
   },
   settings: {
      'import/resolver': {
         'babel-plugin-root-import': {
            rootPathSuffix: 'src',
         },
      },
   },
};
