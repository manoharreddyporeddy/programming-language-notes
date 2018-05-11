
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

//================================
//You can also check whether the code being executed is on the
//  server- side or client- side using
//  typeof window == "undefined" and
//  then fetch your data accordingly
//================================

// =========================
// Data change with mutation
var player = { score: 1, name: 'Jeff' };
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

// Data change without mutation
var player = { score: 1, name: 'Jeff' };
var newPlayer = { ...player, score: 2 };
//      var newPlayer = Object.assign({}, player, {score: 2});
//      newPlayer is {score: 2, name: 'Jeff'}

// The end result is the same
//      but by not mutating (or changing the underlying data) directly
//      we now have an added benefit that
//          can help us increase
//              component and
//              overall
//                  application performance
// =========================
