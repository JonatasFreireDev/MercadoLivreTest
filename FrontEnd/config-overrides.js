const { addBabelPlugin, override, addBabelPreset } = require('customize-cra');

module.exports = override(
   addBabelPlugin([
      'babel-plugin-root-import',
      {
         rootPathSuffix: 'src',
      },
   ])
   // addBabelPreset(['babel-preset-env'])
);
