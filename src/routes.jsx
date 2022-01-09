import fs from 'fs/promises';
import render from 'preact-render-to-string';

function generate(app) {
	app.use((req, res, next) => {
		console.log("client visited: " + req.url);

		// Simulate network delay:
		//setTimeout(next, 2000);

		next();
	});

	app.get('/', (req, res) => {
		fs.readFile(new URL('../src/views/index.jsx', import.meta.url))
			.then(data => {
				const App = () => (
					<div>okayyy</div>
				);

				const app = render(<App />);
				var page = data.toString().replace('<App />', app);
				res.send(page);

				//res.send(domRoot.toString());
			}).catch(err => {
				//@REVISIT
				throw new Error(err);
			});
		//res.render('views/index.jsx');
		//res.send('Hello World!');
	});
}

//const App = () => (
//    <div>
//        <Helmet>
//            <title>Nano JSX SSR</title>
//            <meta name="description" content="Server Side Rendered Nano JSX Application" />
//        </Helmet>

//        <Helmet footer>
//            <script src="/scripts.js"></script>
//        </Helmet>

//        <h1>Hello nano!</h1>
//    </div>
//)


export default {
	generate
}
