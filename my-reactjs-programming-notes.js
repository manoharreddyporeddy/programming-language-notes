
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


class ShoppingList extends React.Component { // React component class, or React component type // takes 'props' parameters
    render() {
        return ( // React element // lightweight description of what to render // hierarchy of views to display // JSX syntax // easier to write these structures
            //  <!-- DOM components below -->
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

//ReactDOM.render(
//    <ShoppingList />,
//    document.getElementById('root')
//);

function a() {
    return (
        <div>
            <ShoppingList name="Mark" />
        </div>
    );
}


// <div /> syntax is transformed at build time to React.createElement('div')

// return React.createElement(
//   "div",
//   { className: "shopping-list" },
//   React.createElement(
//     "h1",
//     null,
//     "Shopping List for ",
//     props.name
//   ),
//   React.createElement(
//     "ul",
//     null,
//     React.createElement(
//       "li",
//       null,
//       "Instagram"
//     ),
//     React.createElement(
//       "li",
//       null,
//       "WhatsApp"
//     ),
//     React.createElement(
//       "li",
//       null,
//       "Oculus"
//     )
//   )
// );


// ==============================================================
////
//    // Square component
//    //  renders a single <button>
//    class Square extends React.Component {

//        //constructor(props) {
//        //    super(props);
//        //    this.state = {
//        //        i: null,
//        //        j: 7
//        //    };
//        //}

//        render() {
//            return (
//                // this.setState
//                //    schedules an update to the component
//                //      causing React to
//                //          merge in the passed state
//                //            to update and
//                //            rerender the component
//                //              along with its descendants.
//                // recieve data through props
//                // controlled components - since the onClick is in the parent
//                <button className="square" onClick={() => this.props.onClick()}>
//                    {this.props.i}
//                </button>
//                //<button className="square" onClick={() => this.setState({ i: "X" })}>
//                //    {this.state.i + this.state.j}
//                //</button>
//            );
//        }
//    }
////
// ==============================================================

// custom html tag name          becomes  function/class's name
// custom html tag's attributes  becomes  functiona rgument called 'props' or     class's 'constructor(props)' and this.props in render() member function

// Functional Components
//      instead of // extends React.Component
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.i}
        </button>
    );
}

// Board component
//  renders 9 squares
class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                i={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
        // return <Square i={this.props.squares[i]} />;    // custom React component // pass data through props
        // return <Square>aaaa{i}</Square>;    // custom React components
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
