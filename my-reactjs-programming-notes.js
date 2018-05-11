
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// production build
//		https://reactjs.org/docs/optimizing-performance.html#use-the-production-build

// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
// https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

// https://reactjs.org/docs/react-api.html#createelement
// 		https://babeljs.io/repl/#?presets=react&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA
// 		https://codepen.io/gaearon/pen/VbbVLg?editors=0010

// NOTE:
// custom html tag name          becomes  function/class's name
// custom html tag's attributes  becomes  functiona rgument called 'props' or     class's 'constructor(props)' and this.props in render() member function

//<a func1={() => props.func1()} />
//<a func1={props.func1} />         // same as above
//<a func1={props.func1()} />         // wrong
