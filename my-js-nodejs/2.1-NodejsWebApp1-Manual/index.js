var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/', function (req, res) {
    // connect
    res.send('Hello World')
})

console.log("listening on http://localhost:3000/");

app.listen(3000)
