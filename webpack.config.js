const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: "forge-core"
    // globalObject: 'this',
    // umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.*css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use : [
          'style-loader',
          'css-loader'
        ]
       },
    ]
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components",
    "grommet": "grommet",
    "grommet-icons": "grommet-icons",
    'react-is': 'react-is',
    'react-router-dom': 'react-router-dom',
    'lodash': 'lodash',
    'react-collapsible': 'react-collapsible',
    'react-copy-to-clipboard': 'react-copy-to-clipboard',
    'react-spinners': 'react-spinners'
  }
};