/**
 * @author caias
 * webpack prod config
 */

// dependencies
import rimraf from 'rimraf';
import merge from 'webpack-merge';

// modules
import { BUILD, optimization } from './config';
import baseConfig from './base';

function production() {
  rimraf(BUILD.BUILD_PATH, () => {});

  return merge(baseConfig, {
    devtool: false,
    mode: 'production',
    output: {
      filename: `[name]${BUILD.FILENAME_SUFFIX}`,
    },
    optimization,
  });
}

export default production;