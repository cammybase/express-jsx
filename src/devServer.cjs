//import express from 'express';
//const app = express();

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require( '../webpack.config.cjs');
const server = require('./main.js');

const compiler = webpack(webpackConfig);

server.app.use(webpackMiddleware(compiler, {
	// webpack-dev-middleware options
}));

//app.listen(3000, () => console.log('Example app listening on port 3000!'));

