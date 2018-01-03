
// For testing, linting, doing code coverage, I use:
// 
// 1. mocha & chai for unit testing & integration testing
// 2. eslint for linting (finding errors) the code
// 3. use nyc (istanbul) for code coverage

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
