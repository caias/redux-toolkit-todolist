/**
 * @author caias
 * webpack5 common chunk config set
*/
import TerserPlugin from 'terser-webpack-plugin';

export const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin({
    extractComments: false,
  })],
  runtimeChunk: {
    name: 'runtime',
  },
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial',
      },
    },
  },
};