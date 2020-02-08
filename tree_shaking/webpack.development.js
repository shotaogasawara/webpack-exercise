const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common.js')

const config = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist', 'development'),
  },
  optimization: {
    usedExports: true,
  },
})

module.exports = config
