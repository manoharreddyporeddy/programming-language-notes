'use strict';
var express = require('express');
var router = express.Router();

var usersObj = require('./users-helper');

/* GET users listing. */
router.get('/', function (req, res) {

    res.send('sum is : ' + usersObj.sum(1, 3));
});


module.exports = router;
