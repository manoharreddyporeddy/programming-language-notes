This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Updating to New Releases

Create React App is divided into two packages:
* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

## Run tests with react-scripts`

```
cd my-reactjs\my-app
npm run testReactScriptsWithJSDOM
```

Output
```
 PASS  src\test\dom-testing\__tests__\CheckboxWithLabel-test.js
 PASS  src\test\snapshot-testing\test\Link.react.test.js
 PASS  src\test.js
 PASS  src\test\basic-testing\test.js
 PASS  src\test\smoke-testing\App.test.js
 PASS  src\test\smoke-testing\App2.test.js

Test Suites: 6 passed, 6 total
Tests:       7 passed, 7 total
Snapshots:   3 passed, 3 total
Time:        10.273s
Ran all test suites.
```


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
