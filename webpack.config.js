const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
	devServer: {
    port: 3000,
    open: true,
    static: ['./src'],
  },
	module: {
    rules: [
			{
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
		],
  },
	plugins: [
      new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    })
  ],
};
