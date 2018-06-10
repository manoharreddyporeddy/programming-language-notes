const express = require('express')
const app = express()

function allowCrossDomain(req, res, next) {	
	
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
}
  
app.use(allowCrossDomain);

var books = require('./books');
app.use('/books', books);


app.listen(3000, () => console.log('app listening on port 3000!\naccess http://localhost:3000/books/ '))

