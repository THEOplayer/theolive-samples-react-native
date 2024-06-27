const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appDirectory = path.resolve(__dirname, '..');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(appDirectory, './web/public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const outputLocation = 'dist';

const CopyWebpackPluginConfig = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(
        appDirectory,
        './node_modules/@theolive/player/THEOLive.sw.js'
      ), // Adjust the path accordingly
      to: path.resolve(appDirectory, outputLocation, 'THEOLive.sw.js'),
    },
  ],
});

const babelLoaderConfiguration = {
  test: /\.tsx?$/,
  exclude: ['/**/*.d.ts', '/**/node_modules/'],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.tsx')],
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, outputLocation),
  },
  module: {
    rules: [babelLoaderConfiguration],
  },
  resolve: {
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-web': path.resolve(
        appDirectory,
        'node_modules/react-native-web'
      ),
      // Avoid duplicate react env.
      'react': path.resolve(appDirectory, '../node_modules/react'),
    },
  },
  plugins: [HTMLWebpackPluginConfig, CopyWebpackPluginConfig],
  devServer: {
    // Tells dev-server to open the browser after server had been started.
    open: true,
    historyApiFallback: true,
    static: [
      {
        directory: path.join(appDirectory, 'web/public'),
      },
    ],
    // Hot reload on source changes
    hot: true,
  },
};
