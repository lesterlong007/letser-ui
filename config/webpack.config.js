/**
 * @name webpack.config
 * @author Lester
 * @date 2021-05-11 10:39
 */

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === 'development';

const cssReg = /\.css$/;
const cssModuleReg = /\.module\.css$/;
const lessReg = /\.less$/;
const lessModuleReg = /\.module\.less$/;

/**
 * 获取样式处理loader
 * @param isModule
 * @param isLess
 * @returns {[string|*, {loader: string, options: {modules: {localIdentName: string}}}|string, string]}
 */
const getStyleLoader = (isModule = false, isLess = false) => {
  const cssModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]_[hash:base64:5]'
      }
    }
  };
  const loaders = [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    isModule ? cssModuleLoader : 'css-loader',
    'postcss-loader'
  ];
  if (isLess) {
    loaders.push('less-loader');
  }
  return loaders;
};

/**
 * 获取babel loader
 * @param isTs
 * @returns {{loader: string, options: {plugins: [[string, {libraryName: string, style: string}]]}}}
 */
const getBabelLoader = (isTs = false) => {
  const loader = {
    loader: 'babel-loader',
    options: {}
  };
  if (isTs) {
    loader.options.presets = ['@babel/preset-typescript'];
  }
  return loader;
};

module.exports = function () {
  const ROOT_PATH = path.resolve(__dirname, '../');

  return {
    entry: {
      main: path.resolve(ROOT_PATH, './src/index.tsx')
    },
    output: {
      path: path.resolve(ROOT_PATH, './dist'),
      filename: 'js/[name].[chunkhash:8].bundle.js',
      publicPath: '/'
    },
    mode: NODE_ENV || 'production',
    module: {
      rules: [
        {
          test: cssReg,
          exclude: cssModuleReg,
          use: getStyleLoader(false, false)
        },
        {
          test: cssModuleReg,
          exclude: /node_modules/,
          use: getStyleLoader(true, false)
        },
        {
          test: lessReg,
          exclude: lessModuleReg,
          use: getStyleLoader(false, true)
        },
        {
          test: lessModuleReg,
          exclude: /node_modules/,
          use: getStyleLoader(true, true)
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: {
                fix: true
              }
            }
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['cache-loader', getBabelLoader(true)]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['cache-loader', getBabelLoader(false)]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 10000,
            name: 'images/[name].[contenthash:8].[ext]'
          }
        },
        {
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'font/[name].[contenthash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        src: path.resolve(ROOT_PATH, './src'),
        components: path.resolve(ROOT_PATH, './components'),
        '@': path.resolve(ROOT_PATH, './src')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.less', '.css']
    },
    plugins: [
      new HtmlPlugin({
        template: path.resolve(ROOT_PATH, './public/index.html'),
        favicon: path.resolve(ROOT_PATH, './public/favicon.ico'),
        // html压缩
        minify: {
          collapseWhitespace: true,
          preserveLineBreaks: true
        }
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? 'css/[name][hash:8].css' : 'css/[name].[chunkhash:8].css',
        chunkFilename: isDev ? 'css/[id][hash:8].css' : 'css/[id].[chunkhash:8].css',
        ignoreOrder: true
      })
    ]
  };
};
