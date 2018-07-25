'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send({ key1: 'value1', message: 'Hurray! Got a GET request for USERS resource.' });
});

router.post('/', function (req, res) {
    res.send({ key1: 'value1', message: 'Hurray! Got a POST request for USERS resource.' });
});

router.put('/', function (req, res) {
    res.send({ key1: 'value1', message: 'Hurray! Got a PUT request for USERS resource.' });
});

router.patch('/', function (req, res) {
    res.send({ key1: 'value1', message: 'Hurray! Got a PATCH request for USERS resource.' });
});

module.exports = router;
