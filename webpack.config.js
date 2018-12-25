const path = require('path');

const config = {
  devServer: {
    // contentBase: '/public/',
    publicPath: '/public/dist/',
    // contentBase: ''),
    // index: path.join(__dirname, 'public/index.html'),
    historyApiFallback: true,
  },
  mode: 'development', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  context: __dirname,
  entry: path.resolve(__dirname, './client/Index.jsx'),
  // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'public/dist/'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js', // string    // the filename template for entry chunks
    // publicPath: './client/dist', // string    // the url to the output directory resolved relative to the HTML page
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,

        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        // options: {
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        // },
        // options for the loader
      },
    ],
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.json',
    ],
  },
  devtool: 'inline-source-map', // enum  // enhance debugging by adding meta info
  // for the browser devtools
  // source-map most detailed at the expense of build speed.
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
};

module.exports = config;
