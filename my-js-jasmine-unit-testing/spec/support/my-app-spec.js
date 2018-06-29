// ------------------------
// ------------------------
// my-app-spec.js		(C:\my-js-jasmine-unit-testing\spec\support\my-app-spec.js)

"use strict";

let myfunctions = require("../../my-app.js");


describe("my suite of tests", function() {

  it("is testing mySum function", function() {
		let result = myfunctions.mySum(2, 3);
		expect(result).toBe(5);
  });
  
  it("is testing mySquare function", function() {
		let result = myfunctions.mySquare(5);
		expect(result).toBe(25);
  });
  
});

// ------------------------
// ------------------------
