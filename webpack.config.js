// webpack configuration
'use strict'

const path = require('path')
const {
  EnvironmentPlugin,
  NoEmitOnErrorsPlugin,
  NamedModulesPlugin
} = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const bundleContent = require('./scripts/bundle-content')

const ENTRY = 'index.js'
const OUTPUT = 'bundle.js'
const CSS_OUTPUT = 'bundle.css'

const SRC_DIR = path.join(__dirname, 'src')
const OUTPUT_DIR = path.join(__dirname, 'public')

const DEV = process.env.NODE_ENV !== 'production'
const DEV_HOST = '0.0.0.0'
const DEV_PORT = 8080

// const CONTENT_DIR = path.join(__dirname, 'src/content')
// const CONTENT_GLOB = '**/*.json'
// const CONTENT_OUT = path.join(__dirname, 'src/content.json')
//
// bundleContent(CONTENT_DIR, CONTENT_GLOB, CONTENT_OUT)

const config = module.exports = {
  entry: [
    path.join(SRC_DIR, ENTRY)
  ],

  output: {
    path: OUTPUT_DIR,
    filename: OUTPUT
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new EnvironmentPlugin({NODE_ENV: 'development'}),
    new ExtractTextPlugin(CSS_OUTPUT)
  ],

  devtool: 'source-map',

  devServer: {
    host: DEV_HOST,
    port: DEV_PORT,
    contentBase: OUTPUT_DIR,
    compress: true,
    historyApiFallback: true
  }
}

if (DEV) {
  config.entry.unshift('react-hot-loader/patch')

  config.plugins.push(
    new NoEmitOnErrorsPlugin(),
    new NamedModulesPlugin()
  )

  config.devtool = 'eval-source-map'
}
