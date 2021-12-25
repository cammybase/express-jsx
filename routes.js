function generate(app) {
	app.use((req, res, next) => {
		console.log("client visited: " + req.url);

		// Simulate network delay:
		//setTimeout(next, 2000);

		next();
	});

	app.get('/', (req, res) => {
		res.send('Hello World!');
	})
}

export default {
	generate
}
