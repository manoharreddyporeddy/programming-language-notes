// https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
// Shallow rendering provides a way to render a React element only one level deep.
//      This means that if you have children elements (like Label in our Button),
//          it will not trigger their render methods. Very nice for unit testing!
//
//  You passed some nice expected JSX (<div><Label name=”Marie” /></div>), and
//      all you got was a weird object output diff.
//  This is because JSX is transpiled to a React.createElement call that then
//      returns a React element (a JavaScript object).
//      So when doing expect(something).toEqual(somethingElse), you are just comparing two JavaScript objects.

import React from 'react';
let createRenderer = require('react-test-renderer/shallow').createRenderer;
// import expect from 'expect';
// npm link react-addons-test-utils
// import { createRenderer } from 'react-addons-test-utils';
// import ReactTestUtils from 'react-dom/test-utils'; // ES6
// var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm

import Button from './Button.js';
import Label from './Label.js';

describe('Button', () => {
    it('works', () => {

        let renderer = createRenderer();
        renderer.render(<Button name="John" />);

        let actualElement = renderer.getRenderOutput();
        let expectedElement = <div><Label name="John" /></div>;

        expect(actualElement).toEqual(expectedElement);
    });
});
