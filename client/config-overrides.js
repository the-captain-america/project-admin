/*
    For more information on how customize-cra works check out its official github repo at:
    https://github.com/arackaf/customize-cra
*/

/*
    For more information on addBabelPlugins check out its official github repo at:
    https://github.com/arackaf/customize-cra#addbabelpluginsplugins
*/

const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        containers: './src/containers',
        utils: './src/utils'
      }
    }
  ])
);
