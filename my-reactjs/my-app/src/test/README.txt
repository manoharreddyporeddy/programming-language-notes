
Testing Components
There is a broad spectrum of component testing techniques.
They range from
    smoke test - verifying that a component renders without throwing
    shallow rendering and testing some of the output (1-level depth testing)
    full rendering and
    component lifecycle and state changes tests.

Different projects choose different testing tradeoffs based on
    how often components change, and
    how much logic they contain.

    If you haven’t decided on a testing strategy yet,
        we recommend that you start with
            creating simple smoke tests for your components

    When you encounter bugs caused by changing components, you will gain
        a deeper insight
            into which parts of them
            are worth testing
            in your application.
        This might be a good time to introduce
            more specific tests
                asserting specific
                    expected output or behavior

    If you’d like to test components in isolation
        from the child components they render,
        we recommend using
            shallow() rendering API from Enzyme.
            To install it, run:

            npm install --save-dev  enzyme  enzyme-adapter-react-16  react-test-renderer



cd C:\repo\my-react\my-app
    npm install mocha
    npm install chai
    npm install react
    npm install react-dom
    npm install react-scripts
    npm install react-addons-test-utils --save-dev
    npm install react-test-renderer --save-dev

C:\repo\my-react\my-app
    npm install react-test-renderer --save-dev

    npm install mocha -g
    npm install chai -g
    npm install react -g
    npm install react-dom -g
    npm install react-addons-test-utils -g
    npm install react-scripts -g

    npm link mocha
    npm link chai
    npm link react
    npm link react-dom
    npm link react-addons-test-utils
    npm link react-scripts

https://facebook.github.io/jest/docs/en/tutorial-react.html#content
https://github.com/facebook/create-react-app
