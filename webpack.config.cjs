//@TODO comment the purpose:
const path = require('path');

//@TODO comment the purpose:
const nodeExternals = require('webpack-node-externals');

//import config from './cammybase.config.js';

var webpackConfig = {
	entry: './src/main.js',
	target: 'node',
	externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: 'cammybaseServer.cjs',
		path: path.resolve(__dirname, 'build/')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src/'),
				],
				exclude: [
					/node_modules/,

					// Ignore jsx views; we want to keep them jsx (@REVISIT)
					path.resolve(__dirname, 'src/views/'),
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
};

//var devConfig = Object.assign({}, webpackConfig, {
//    entry: './src/devServer.js',
//    output: {
//        filename: 'cammybaseDevServer.cjs',
//        path: path.resolve(__dirname, 'build/')
//    },
//    nodemonConfig: {
//        "ignore": ["test/*", "docs/*"],
//        "delay": 2500
//    }
//});

//module.exports = [webpackConfig, devConfig];
module.exports = [webpackConfig];
