const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const fs = require('fs');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const nodeExternals = require('webpack-node-externals');

module.exports = [{
	entry: './src/main.js',
	target: 'node',
	externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: 'cammybaseServer.cjs',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				//exclude: /node_modules/,
				include: [
					path.resolve(__dirname, 'src/'),
				],
				loader: "babel-loader",
				options: {
					babelrc: true,
				},
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{ loader: "css-loader", options: {
						// url: false,
						//modules: {
						//    compileType: 'icss'
						//}
					}},
					"sass-loader"
				]
			}
		]
	},
}]
