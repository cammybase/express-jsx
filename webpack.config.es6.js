import path  from 'path';
//const path = require('path');
//const fs = require('fs');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const nodeExternals = require('webpack-node-externals');

//module.exports = [{
export default [{
	entry: './src/main.js',
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: 'cammybase.js',
		path: new URL('./build/', import.meta.url)
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				//exclude: /node_modules/,
				include: [
					new URL('./src/', import.meta.url)
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
