const fs = require('fs');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
// 获取当前项目的根路径
const appDirectory = fs.realpathSync(process.cwd());
// 获取相对项目的路径
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const entry = {
  index: {
    import: resolveApp('src/index')
  }
}

const output = {
  path: resolveApp('dist'),
  filename: '[name].js',
  assetModuleFilename: '[name].[ext]'
}

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          // 移除注释
          comments: false,
          ascii_only: true,
        },
      },
      extractComments: false,
    }),
  ],
}

const webpackModule = {
  strictExportPresence: true,
  rules: [
    // 能够提取匹配到的第三方模块的source-map，无论是文件或者链接或者内联模式都可
    {
      oneOf: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: resolveApp('src'),
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              // 生产环境下才使用 polyfill
              [
                '@babel/preset-env',
                // 按需加载
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              // 识别ts
              '@babel/preset-typescript',
            ],
            cacheDirectory: true,
            cacheCompression: false,
            compact: true,
          },
        },
      ],
    },
  ],
}

const plugins = [
  // 进度条，替代方案 progress-bar-webpack-plugin
  new WebpackBar(),
].filter(Boolean);

module.exports = {
  entry,
  output,
  optimization,
  mode: 'production',
  module: webpackModule,
  plugins,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.json', '.wasm']
  }
}
