const express = require('express')

const app = express()

app.get('/', async (req, res) => {
	console.log("FInal healthCheck ===> ");
   res.send('Welcome to piranha Env...')
})

app.get('/healthCheck', async (req, res) => {
	console.log("FInal healthCheck ===> ");
   res.send('Welcome to piranha Env healthCheck... ')
})

const port = 8999;
	app.listen(port, () => console.log(`Listening on port ..vifen`));
