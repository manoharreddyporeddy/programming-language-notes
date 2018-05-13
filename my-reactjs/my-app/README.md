## Create React App is divided into two packages:
* `create-react-app` is a global command-line utility   that you use to create new projects.
* `react-scripts`    is a development dependency        in the generated projects (including this one).

## Run tests with react-scripts

```
cd my-reactjs\my-app
npm run test_using_Jest
```


## Run tests with react-scripts

```
cd my-reactjs\my-app
npm run test_using_ReactScripts_in_JSDOM
```
NOTE: press 'a' to run all tests


Output
```
 PASS  src\test.js
 PASS  src\test\snapshot-testing\test\Link.react.test.js
 PASS  src\test\dom-testing\__tests__\CheckboxWithLabel-test.js
 PASS  src\test\basic-testing\test.js
 PASS  src\test\smoke-testing\App.test.js
 PASS  src\test\smoke-testing\App2.test.js

Test Suites: 6 passed, 6 total
Tests:       7 passed, 7 total
Snapshots:   3 passed, 3 total
Time:        10.158s
Ran all test suites.
```

## Analyzing the Bundle Size

Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.
```
npm run build
npm run analyze
```
Note: Source map explorer opens a page in browser.


## Deployment
npm run build creates a build directory with a production build of your app.
Set up your favorite HTTP server so that a visitor to your site is served index.html, and
    requests to static paths like /static/js/main.<hash>.js are served
        with the contents of the  /static/js/main.<hash>.js file.

# Static Server
For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

```
npm install -g serve
serve -s build
``` 

The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -p or --port flags.

Run this command to get a full list of the options available:

```
serve -h
```





More: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
