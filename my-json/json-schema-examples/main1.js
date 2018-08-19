var Validator = require('jsonschema').Validator;
var v = new Validator();

// JSON SCHEMA
var testSchema = require('./jsc1-simple-number.schema.js');
// var testSchema = require('./jsc111-required-simple-number.schema.js');

// JSON TO TEST
// var testJson = require('./j1-number-good.js');
var testJson = require('./j1-number-bad.js');
// var testJson = require('./j111-required--number-bad.js');
// var testJson = require('./j111-required--number-bad2.js');


// VALIDATE		- JSON AGAINST JSON SCHEMA
let result = v.validate(testJson, testSchema)


// DISPLAY RESULT
console.log('\n\n');
console.log(' *** full result *** ');
console.log(result);


// DISPLAY RESULT.ERRORS
console.log('\n\n');
console.log(' *** errors *** ');
if (result.errors.length === 0) {
    console.log('No errors');
} else {
    console.log(result.errors);
}
