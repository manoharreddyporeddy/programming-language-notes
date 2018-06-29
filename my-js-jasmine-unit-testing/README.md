
<pre>
=====================================
Jasmine unit testing tutorial
=====================================

1. karma is used for mainly server/backend like nodejs
2. jasmine is used for mainly for client/frontend/GUI like angularjs/reactjs, etc.]

=====================================
A. One time installation:

install nodejs from nodejs.org
	download the LTS version
	install it
=====================================

=====================================
B. per project 
=====================================
1. create directory "my-js-jasmine-unit-testing" in C:\ drive

2. run below commands

cd C:\my-js-jasmine-unit-testing

npm init
	NOTE: press ENTER many times, so that your package.json file is created
	NOTE: package.json file stores your project dependencies on 3rd party free modules like express.js, etc. that will help you do your work faster
	NOTE: the "dependencies": {},  and   "devDependencies": {}, will be empty at first

npm install --save-dev jasmine
	NOTE: npm install will install the jasmine under node_modules/jasmine directory in your project
	NOTE: "--save-dev" will fill your devDependencies will jasmine & its version ("jasmine": "^3.1.0") in your package.json file, the devDependencies are those that wont go to production/live (like your unit-testing modules like like jasmine, won't go to live, as the customer wont need that - this is for developer only so it is --save-dev)

node node_modules/jasmine/bin/jasmine init
    NOTE: above Initialize Jasmine in your project - creates spec directory and jasmine.json file ("spec\support\jasmine.json") in your project folder
	NOTE: spec means specification/ requirements specification/ what the project is supposed to do/ your application feature - so jasmine is getting ready to test your application specs/features

3. package.json has below:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

that means when we run "npm test", you will see "Error: no test specified"
"npm test" is to test your application features, since we didn't write any tests for your application the "Error: no test specified" makes sense
so, we need to change it to say, that npm test should invoke "jasmine" which will run your tests
that is, jasmine is your test runner

so change the package.json scripts part, so that it looks like below:

  "scripts": {
    "test": "jasmine"
  },

Now, npm test will call jasmine


4. Run below command, to run your tests

npm test

NOTE: the output will be as below (because we din't write any tests yet, but calling jasmine to run tests)

	> jasmine

	Randomized with seed 99463
	Started


	No specs found
	Finished in 0 seconds
	Incomplete: No specs found
	Randomized with seed 99463 (jasmine --random=true --seed=99463)
	npm ERR! Test failed.  See above for more details.

5. Now, we write some simple tests, in a file called "spec.js" - save below in "my-js-jasmine-unit-testing\spec\support\spec.js"

// ------------------------
// ------------------------
// spec.js (C:\my-js-jasmine-unit-testing\spec\support\spec.js)
describe("my suite of tests", function() {

  it("my test1", function() {
    var a = true;
    expect(a).toBe(true);
  });
  
  it("my square test", function() {
    var a = 5;
    expect(a*a).toBe(25);
  });
  
  it("my test on string concat", function() {
    var a = "hello";
    expect(a + " world").toBe("hello world");
  });
  
});
// ------------------------
// ------------------------


// NOTE: the above has 3 tests, "my test1", "my square test" & "my test on string concat"
// NOTE: each function is doing some work like square, and testing the value is correct using expect & toBe functions given by jasmine library


6. Run the tests using "npm test"

NOTE: your output will be as below:

		 my-js-jasmine-unit-testing@1.0.0 test C:\Manohar\GitHub\my-programming-language-notes\my-js-jasmine-unit-testing
		> jasmine

		Randomized with seed 12699
		Started
		...


		3 specs, 0 failures
		Finished in 0.031 seconds
		Randomized with seed 12699 (jasmine --random=true --seed=12699)

The above is saying "3 specs, 0 failures" that means all 3 tests we wrote in spec.js are PASS, also note "..." just above it, that means 3 tests passed.


7. Now lets write a small application (my-app.js), then write some tests to it (my-app-spec.js)

7.a) create "my-app.js" at "C:\my-js-jasmine-unit-testing\my-app.js" as below:


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







7.b) create "my-app-spec.js" at "C:\my-js-jasmine-unit-testing\spec\support\my-app-spec.js" as below:

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






8. now we have both application file and test files, run the test with "npm test" at "C:\my-js-jasmine-unit-testing"

NOTE: Output is below:

	> my-js-jasmine-unit-testing@1.0.0 test C:\Manohar\GitHub\my-programming-language-notes\my-js-jasmine-unit-testing
	> jasmine

	Randomized with seed 12449
	Started
	.....


	5 specs, 0 failures
	Finished in 0.015 seconds
	Randomized with seed 12449 (jasmine --random=true --seed=12449)


NOTE: npm test ran both spec files (spec.js & also my-app-spec.js), so a total of 5 tests ran
NOTE: "5 specs, 0 failures" and "....." all 5 tests passed


9. More details:

Similar to toBe() methods there are many methods we can use:

examples:
	expect(a).toBe(b);
	expect(a).not.toBe(null);
	expect(a).toContain("bar");
	expect(a).not.toContain("quux");
	expect(e).toBeLessThan(pi);
	expect(pi).not.toBeLessThan(e);
	and, many more.

All these are documented here: https://jasmine.github.io/2.0/introduction


==========

if you get stuck doing the above
then, download the files from here
	https://github.com/manoharreddyporeddy/my-programming-language-notes/tree/master/my-js-jasmine-unit-testing

==========

Thats all. Best of luck.

</pre>
