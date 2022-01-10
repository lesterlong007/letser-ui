/**
 * @name start
 * @author Lester
 * @date 2021-05-11 10:31
 */
'use strict';

const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const PORT = parseInt(process.env.PORT, 10) || 8888;
const HOST = process.env.HOST || 'localhost';

const startConfig = {
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    host: HOST,
    port: PORT,
    open: true,
    hot: true,
    https: process.env.HTTPS === 'true',
    historyApiFallback: true,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: true
      }
    },
    proxy: [
      {
        context: ['/api'],
        target: 'https://www.baidu.com',
        secure: false,
        changeOrigin: true
      }
    ]
  }
};

module.exports = merge(webpackConfig(), startConfig);
