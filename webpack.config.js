const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 打包生成的代码支持什么特性
    environment: {
      arrowFunction: false, // 是否支持箭头函数
      const: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    targets: {
                      edge: '17',
                      firefox: '60',
                      chrome: '67',
                      safari: '11.1',
                      ie: '11',
                    },
                    // 按需加载
                    useBuiltIns: 'usage',
                    corejs: '3',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        exclude: /node-modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
