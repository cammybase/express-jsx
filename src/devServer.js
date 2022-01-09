//import express from 'express';
//const app = express();

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import server from './main.js';

const compiler = webpack(webpackConfig);

server.app.use(webpackMiddleware(compiler, {
	// webpack-dev-middleware options
}));

//app.listen(3000, () => console.log('Example app listening on port 3000!'));

