const express = require('express');
const config = require('./cammybase.config');
const cammyRoutes = require('./routes');

class CammyServer {
	constructor() {
		this.app = express();
		this.initializeRoutes();
	}

	initializeRoutes() {
		cammyRoutes.generate(this.app);
	}

	listen() {
		this.app.listen(config.port), () => {
			console.log("CammyServer listening at http://localhost:${config.port}");
		};
	}
}

var server = new CammyServer();
server.listen();

