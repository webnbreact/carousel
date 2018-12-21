const path = require('path');

module.exports = {
  mode: 'development', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './public/index.jsx', // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    context: __dirname,
    path: './public/dist/', // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js', // string    // the filename template for entry chunks
    module: {
      // configuration regarding modules
      rules: [
        // rules for modules (configure loaders, parser options, etc.)
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [path.resolve(__dirname, 'node/modules')],
          // these are matching conditions, each accepting a regular expression or string
          // test and include have the same behavior, both must be matched
          // exclude must not be matched (takes preference over test and include)
          // Best practices:
          // - Use RegExp only in test and for filename matching
          // - Use arrays of absolute paths in include and exclude
          // - Try to avoid exclude and prefer include
          // conditions for the issuer (the origin of the import)
          // flags to apply these rules, even if they are overridden (advanced option)
          // the loader which should be applied, it'll be resolved relative to the context
          // -loader suffix is no longer optional in webpack2 for clarity reasons
          // see webpack 1 upgrade guide
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
          // options for the loader
        },
      ],
      /* Advanced module configuration (click to show) */
    },
    devtool: 'cheap-eval-source-map', // enum  // enhance debugging by adding meta info for the browser devtools

    // lets you provide options for webpack-serve
    devServer: {
      publicPath: './public/dist/',
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    },
    // ...
  },
  plugins: [
    // ...
  ],
  // list of additional plugins
  /* Advanced configuration (click to show) */
};
