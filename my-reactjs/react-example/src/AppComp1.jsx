import React from 'react';
import ReactDOM from 'react-dom';

import __allPropTypes from './common-prop-types';

let mydata1 = [
    { "id": 1, "name": "Foo", "age": "20" },
    { "id": 2, "name": "Bar", "age": "30" },
    { "id": 3, "name": "Baz", "age": "40" }
];

class AppComp1 extends React.Component {

    constructor() {
        super();

        // Stateful Example
        this.state = {
            header: "Header from mutable 'state' (this.state)",
            content: "Content from mutable 'state' (this.state)",
            arr_data: mydata1
        }

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    setStateHandler() {
        var dataCopy = this.state.arr_data.slice();
        dataCopy.push({ "id": 4, "name": "asd", "age": "23" });
        this.setState({ arr_data: dataCopy })
    }
    forceUpdateHandler() {
        this.forceUpdate();
    }
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'orange';
    }

    render() {
        ContentPropTypes.propTypes = __allPropTypes.ContentPropTypes;

        // let this1 = this;

        return (
            <div>
                <h1> -- AppComp1 -- </h1>
                <hr />

                <p> -- Hello World -- </p>
                Hello World!!!!
    			<hr />

                <p>  -- Stateless Example -- </p>
                <Header />
                <Content />
                <hr />

                <p>  -- Stateful Example -- </p>
                <div>
                    <h1>{this.state.header}</h1>
                    <h2>{this.state.content}</h2>
                </div>
                <hr />

                <p>  -- Props Example -- </p>
                <HeaderContentP
                    headerProp="Header from immutable 'props' (this.props)"
                    contentProp="Content from immutable 'props' (this.props)"
                />
                {
                    //ContentP.defaultProps = {
                    //  headerProp: "Header from props...",
                    //  contentProp:"Content from props..."
                    //}
                }
                <hr />

                <p>  -- From State (parent), send to Props (children) Example -- </p>
                <HeaderP headerProp={this.state.header} />
                <ContentP contentProp={this.state.content} />
                <table>
                    <tbody>
                        {this.state.arr_data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
                <hr />

                <ContentPropTypes
                    name='Tutorialspoint.com'
                    propArray={[1, 2, 3, 4, 5]}     // comment this and see propTypes 'required' failure
                    propBool={true}
                    propFunc={function (e) { return e }}
                    propNumber={1}
                    propString="String value..."
                />
                <hr />

                <MySetStateExample
                    data="newele"
                    // setStateHandler={function () { this1.setState({ data: [{ "id": 1, "name": "Foo", "age": "20" }] }) }}
                    setStateHandler={this.setStateHandler}
                />
                <hr />

                <MyForceUpdateExample
                    data="newele"
                    // forceUpdateHandler={function () { this1.forceUpdate(); }}
                    forceUpdateHandler={this.forceUpdateHandler}
                />
                <hr />

                <MyFindDomNodeHandler
                    data="newele"
                    // findDomNodeHandler={function () { var myDiv = document.getElementById('myDiv'); ReactDOM.findDOMNode(myDiv).style.color = 'green'; }}
                    findDomNodeHandler={this.findDomNodeHandler}
                />
                <hr />


                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />

                <br />
                <br />
                <br />
            </div>
        );
    }
}
// --------------
//                 <p>  -- Stateless Example -- </p>
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>paragraph text</p>
            </div>
        );
    }
}
// --------------
//                 <p>  -- Props Example -- </p>
class HeaderContentP extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.headerProp}</h2>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
// --------------
//                <p>  -- From State (parent), send to Props (children) Example -- </p>
class HeaderP extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}
class ContentP extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
// --------------
class ContentPropTypes extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
// --------------
class MySetStateExample extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.setStateHandler}>SET STATE</button>
                <h4>New element added: {this.props.data}</h4>
            </div>
        );
    }
}
// --------------
class MyForceUpdateExample extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}
// --------------
class MyFindDomNodeHandler extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.findDomNodeHandler}>FIND DOME NODE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}
// --------------
// --------------
// --------------
// --------------
// --------------
export default AppComp1;
