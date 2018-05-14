import React from 'react';
import ReactDOM from 'react-dom';

import g_common_prop_types from './common-prop-types';

let arr_details1 = [
    { "id": 1, "name": "Foo", "age": "20" },
    { "id": 2, "name": "Bar", "age": "30" },
    { "id": 3, "name": "Baz", "age": "40" }
];

class AppComp1 extends React.Component {

    constructor(props) {
        super(props);

        // Stateful Example
        this.state = {
            header: "header from mutable 'state' (this.state)",
            content: "content from mutable 'state' (this.state)",

            arr_details: arr_details1,

            data: 0
        }

        this.handleSetState = this.handleSetState.bind(this);
        this.handleForceUpdate = this.handleForceUpdate.bind(this);
        this.handleFindDomNode = this.handleFindDomNode.bind(this);

        this.setNewNumber = this.setNewNumber.bind(this)
    }

    handleSetState() {
        var arr_details_copy = this.state.arr_details.slice();
        arr_details_copy.push({ "id": 4, "name": "asd", "age": "23" });

        this.setState({ arr_details: arr_details_copy })
    }
    handleForceUpdate() {
        this.forceUpdate();
    }
    handleFindDomNode() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'orange';
    }

    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        ContentPropTypes1.propTypes = g_common_prop_types.ContentPropTypes1;

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
                <BodyP1
                    headerProp="header from immutable 'props' (this.props)"
                    contentProp="content from immutable 'props' (this.props)"
                />
                <hr />

                <p>  -- Props Example via defaultProps see comments below -- </p>
                <hr />

                <p>  -- Pass 'state' from parent, as props to children -- Example -- </p>
                <p>  -- here array will be expanded as table rows (tr/tds) -- </p>
                <HeaderP headerProp={this.state.header} />
                <ContentP contentProp={this.state.content} />
                <table>
                    <tbody>
                        {this.state.arr_details.map((person, i) => <TableRow key={i} personDetailProp={person} />)}
                    </tbody>
                </table>
                <hr />

                <p>  -- Assign ContentPropTypes1.propTypes to a map have each prop and its prop type (PropTypes.string, PropTypes.int required) help to find if props have correct type and others like required, etc. Must as the project becomes big. -- Example -- </p>
                <ContentPropTypes1
                    name='Some name 1'
                    propArray={[1, 2, 3, 4, 5]}     // comment this and see propTypes 'required' failure
                    propBool={true}
                    propFunc={function (e) { return e }}
                    propNumber={1}
                    propString="Some string value..."
                />
                <hr />


                <p>  -- Component API -- Examples -- </p>
                <MySetStateExample
                    data="newele"
                    // handleSetState={function () { this1.setState({ data: [{ "id": 1, "name": "Foo", "age": "20" }] }) }}
                    handleSetState={this.handleSetState}
                />
                <hr />

                <MyForceUpdateExample
                    data="newele"
                    // handleForceUpdate={function () { this1.forceUpdate(); }}
                    handleForceUpdate={this.handleForceUpdate}
                />
                <hr />

                <MyFindDomNodeHandler
                    data="newele"
                    // handleFindDomNode={function () { var myDiv = document.getElementById('myDiv'); ReactDOM.findDOMNode(myDiv).style.color = 'green'; }}
                    handleFindDomNode={this.handleFindDomNode}
                />
                <hr />


                <p>  -- Component Lifecycle Methods -- Examples -- </p>
                <p>  -- Note: ReactDOM.unmountComponentAtNode(htmlnode) is commented in index.js -- </p>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <MyLcmComponent1 myNumber={this.state.data}></MyLcmComponent1>
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
                <h1>header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>content</h2>
                <p>paragraph text</p>
            </div>
        );
    }
}
// --------------
//                 <p>  -- Props Example -- </p>
class BodyP1 extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.headerProp}</h2>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
//BodyP1.defaultProps = {
//  headerProp: "header from immutable 'props' (this.props)",
//  contentProp: "content from immutable 'props' (this.props)"
//}

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
                <h2>content</h2>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.personDetailProp.id}</td>
                <td>{this.props.personDetailProp.name}</td>
                <td>{this.props.personDetailProp.age}</td>
            </tr>
        );
    }
}
// --------------
//                      <p>  -- Assign ContentPropTypes1.propTypes to a map have each prop and its prop type (PropTypes.string, PropTypes.int) help to find if props have correct type, good/must as the project becomes big -- Example -- </p>
class ContentPropTypes1 extends React.Component {
    render() {
        return (
            <div>
                <h2>content</h2>
                <p>{this.props.propString}</p>
            </div>
        );
    }
}
// --------------
//                <p>  -- Component API -- Examples -- </p>
class MySetStateExample extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleSetState}>SET STATE</button>
                <h4>New element added: {this.props.data}</h4>
            </div>
        );
    }
}

class MyForceUpdateExample extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleForceUpdate}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}

class MyFindDomNodeHandler extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleFindDomNode}>FIND DOME NODE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}
// --------------
//                <p>  -- Component Lifecycle Methods -- Examples -- </p>
class MyLcmComponent1 extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
// --------------
// --------------
// --------------
// --------------
export default AppComp1;
