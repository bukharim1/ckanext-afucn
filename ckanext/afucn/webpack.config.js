const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // or 'development' for debugging
  entry: './static/scss/styles.scss', // Entry point for your SASS files
  output: {
    path: path.resolve(__dirname, 'public/css'), // Output to the 'public/css' folder
    filename: 'bundle.js', // Dummy JS file (required by Webpack)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate file
          'css-loader',                // Translates CSS into CommonJS
          'sass-loader'                // Compiles SASS to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output the compiled CSS as 'styles.css'
    }),
  ],
};
