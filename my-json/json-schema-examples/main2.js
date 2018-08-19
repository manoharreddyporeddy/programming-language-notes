var Validator = require('jsonschema').Validator;
var v = new Validator();


// Example #2

// JSON SCHEMA
var addressSchema = require('./jsc2-address.schema.js');
var testSchema = require('./jsc2-person.schema.js');

// JSON TO TEST
var testJson;
// testJson = require('./j2-person-good.js');
// testJson = require('./j2-person-bad-is-not-of-a-type.js');
// testJson = require('./j2-person-bad-must-have-a-minimum-value-of.js');
testJson = require('./j2-person-bad-is-not-of-a-type---country.js');


// if external json $ref exists
v.addSchema(addressSchema, '/SimpleAddress');   // otherwise,  SchemaError: no such schema </SimpleAddress>,  due to $ref


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
