import webpack from 'webpack';
import PnpWebpackPlugin from 'pnp-webpack-plugin';

export default {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    plugins: [PnpWebpackPlugin],
  },

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
