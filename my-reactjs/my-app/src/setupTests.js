import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// If your app uses a browser API that
//      you need to mock in your tests
//      or
//  if you just need a global setup before running your tests,
//      add a src/ setupTests.js to your project.
//          It will be automatically executed before running your tests.
//
//const localStorageMock = {
//    getItem: jest.fn(),
//    setItem: jest.fn(),
//    clear: jest.fn()
//};
//global.localStorage = localStorageMock
