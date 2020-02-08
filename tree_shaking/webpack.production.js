const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common.js')

const config = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'production'),
  },
})

module.exports = config
