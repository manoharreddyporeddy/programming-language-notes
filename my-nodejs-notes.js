
// ------------------------------
my-nodejs-notes.js
// ------------------------------
for (var i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}

for (let i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}


// const
//    locks assignment
//    does not make immutable


// ...    the spread operator
//	spreads both array and object elements, can be used in wrapper [] and {}
function (...a) {
	console.log(a);
}


	
// ------------------------------
// azure-context-console-log-error.js
// ------------------------------
let context = console;

context.log.verbose = context.log;
context.log.info = context.log;
context.log.error = context.error;

// 
// context.log.verbose = function () { };
// context.log.info = function () { };
// context.log = function () { };


// ------------------------------
// date-time-timezone.js
// ------------------------------

var dateString = (new Date()).toString(); console.log(dateString);
// Fri Dec 29 2017 14:49:04 GMT+0530 (India Standard Time)

var UTCstring = (new Date()).toUTCString(); console.log(UTCstring);
// Fri, 29 Dec 2017 09:19:07 GMT

var ISOString = (new Date()).toISOString(); console.log(ISOString);
// 2017-12-29T09:18:43.180Z


// DON'T USE THIS ONE - BEGIN
// Note: toGMTString() is deprecated and should no longer be used.
var GMTString = (new Date()).toGMTString(); console.log(GMTString);
// Fri, 29 Dec 2017 09:21:16 GMT
// DON'T USE THIS ONE - END
// ------------------------------
essentials-unit-testing-integration-testing-linting-code-coverage.js
// ------------------------------

// For testing, linting, doing code coverage, I use:
// 
// 1. mocha & chai for unit testing & integration testing
// 2. eslint for linting (finding errors) the code
// 3. use nyc (istanbul) for code coverage
//
// Assuming you have below structure
//   yourproj/test/testrunner.js
//   yourproj/test/test-cases.js
//   yourproj/src/index.js
//
// The package.json can have below: lines to have test, lint&test, and other things done.

  "scripts": {
    "test1": "cd test && mocha *testrunner.js     --timeout 240000",
    "lintAndtest1": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest2": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest3": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest4": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest5": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "zcc": "cd test &&                 nyc --reporter=text --reporter=text-summary --reporter=html mocha *testrunner.js     --timeout 240000",
    "test:int1": "cd test &&                                                                             mocha *testrunner_api.js --timeout 240000",
    "srcinstall": "cd src && npm install",
    "testinstall": "cd test && npm install"
  },

  

// ------------------------------
nodejs-simple-promise-example.js
// ------------------------------
function someFunction(arg1) {
    return new Promise((resolve, reject) => {
        
        if (arg1 === 'YES') {
            return resolve('GOOD VALUE');
        }else {
            return reject('BAD VALUE - EXPECTING.. YES');
        }

    });

}

someFunction('YES')    // 'YES' will go into arg1, of someFunction
		.then(function (result) {                    
			console.error('good result');   // this will be triggered
		})
		.catch(function (err) {
			console.error('bad error');
		});
		
someFunction('NO')   // 'NO' will go into arg1, of someFunction
		.then(function (result) {                    
			console.error('good result');
		})
		.catch(function (err) {
			console.error('bad error');     // this will be triggered
		});


// ------------------------------
performance_timers_helper_nodejs_azure_aws.js
// ------------------------------
//
// Author: github.com/manoharreddyporeddy
// for aws, azure, nodejs - performance timers
//  time & timeEnd

// hrtime
//      high-resolution real time
//      returns [seconds, nanoseconds], relative to an arbitrary time in the past

let startTimeArray = undefined;
let endTimeArray = undefined;
let strMessage = undefined;

// =========
// If you are working on micrsoft azure functions
// then replace all
//  console
//      to
//  context
// =========

function time(strMessage1) {
    if (startTimeArray !== undefined) {
        console.error('Error: timeEnd() was not called, resetting');

        startTimeArray = undefined; // clear previous timer
    }

    startTimeArray = process.hrtime(); // from current time // start new timer
    strMessage = strMessage1;
}

function timeEnd(strMessage1) {
    if (startTimeArray === undefined) {
        console.error('Error: time() was not called, resetting');

        startTimeArray = undefined; // clear previous timer
        endTimeArray = undefined; // clear previous timer
        return;
    }

    if (strMessage !== strMessage1) {
        console.error('Error: time() & timeEnd() messages don\'t match, resetting');

        startTimeArray = undefined; // clear previous timer
        endTimeArray = undefined; // clear previous timer
        return;
    }


    endTimeArray = process.hrtime(startTimeArray); // from start time

    console.log('TimeTaken: ' + (endTimeArray[0] + (endTimeArray[1] / 1e9)).toFixed(3) + ' seconds');

    // console.log('TimeTaken: ' + (endTimeArray[0] * 1e9 + (endTimeArray[1])) + ' nanoseconds');

    startTimeArray = undefined; // clear previous timer
    endTimeArray = undefined; // clear previous timer
}


function doMain() {

    console.log('=======================');
    console.log('testing positive cases');
    console.log('=======================');

    // case 1: 1 second
    time();
    for (let i = 0; i < 1e9; i++) {
    }
    timeEnd();

    // case 2: 8 second
    time();
    for (let i = 0; i < 3 * 1e9; i++) {
    }
    timeEnd();


    console.log('=======================');
    console.log('testing negative cases');
    console.log('=======================');

    // case 3: error scenarios
    timeEnd();
    time();
    time();
    console.log('=======================');
}

doMain();

// ------------------------------
