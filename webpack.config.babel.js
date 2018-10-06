import webpack from 'webpack';
import PnpWebpackPlugin from 'pnp-webpack-plugin';

export default {
  entry: './src/index.js',

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('postcss-loader'),
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    plugins: [PnpWebpackPlugin],
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
