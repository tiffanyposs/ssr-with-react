const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're building a bundle
  // for nodeJS, rather than for the browswer
  target: 'node',

  // tell webpack the root file of our server application
  entry: './src/index.js',

  // tell webpack where to put the
  // output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // don't bundle things that are already
  // available in the node_modules folder
  // reduces the size of the server side bundle
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
