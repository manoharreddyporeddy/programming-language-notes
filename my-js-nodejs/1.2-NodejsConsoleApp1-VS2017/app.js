'use strict';

var a = 5;

console.log('Hello world');
console.log('process.env: ' + JSON.stringify(process.env));



var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + d.toString().trim() + "]");
});
