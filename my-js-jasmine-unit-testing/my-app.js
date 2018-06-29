// ------------------------
// ------------------------
// my-app.js		(C:\my-js-jasmine-unit-testing\my-app.js)

"use strict";

function mySum(num1, num2) {
	return num1 + num2;
}

function mySquare(num) {
	return num * num;
}


// export all functions so that they can used by other files, or tests (*spec.js)
module.exports = {
	mySum: mySum,
	mySquare: mySquare
};

// ------------------------
// ------------------------
