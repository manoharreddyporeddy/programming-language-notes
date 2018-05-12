import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    debugger;
    shallow(<App />);
});

// Unlike the previous smoke test using ReactDOM.render(), this test only renders <App> and doesn’t go deeper.
//  For example, even if <App> itself renders a <Button> that throws, this test will pass.
//  Shallow rendering is great for isolated unit tests,
//      but you may still want to create some full rendering tests to ensure the components integrate correctly.
//      Enzyme supports full rendering with mount(),
//          and you can also use it for testing state changes and component lifecycle.

// assertions but you don’t have to use them because
//      Jest provides built-in expect() and jest.fn() for spies.


//// asserts specific output, rewritten to use Jest matchers
//it('renders welcome message', () => {
//    const wrapper = shallow(<App />);
//    const welcome = <h2>Welcome to React</h2>;

//    console.log(wrapper);

//    // expect(wrapper.contains(welcome)).to.equal(true);
//    expect(wrapper.contains(welcome)).toEqual(true);
//});
//// http://facebook.github.io/jest/docs/en/expect.html

//// asserts specific output, rewritten to use Jest matchers
//it('renders welcome message', () => {
//    const wrapper = shallow(<App />);
//    const welcome = <h2>Welcome to React</h2>;
//    expect(wrapper).toContainReact(welcome)
//});
//// http://facebook.github.io/jest/docs/en/expect.html


//// temporarily exclude a test from being executed
//xit('renders welcome message', () => {
//    const wrapper = shallow(<App />);
//    const welcome = <h2>Welcome to React</h2>;
//    expect(wrapper).toContainReact(welcome)
//});

//// focus on a specific test without running any other tests
//fit('renders welcome message', () => {
//    const wrapper = shallow(<App />);
//    const welcome = <h2>Welcome to React</h2>;
//    expect(wrapper).toContainReact(welcome)
//});
