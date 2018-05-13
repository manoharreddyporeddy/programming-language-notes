import React from 'react';

let mydata1 = [
    { "id": 1, "name": "Foo", "age": "20" },
    { "id": 2, "name": "Bar", "age": "30" },
    { "id": 3, "name": "Baz", "age": "40" }
];

class App extends React.Component {

    constructor() {
        super();
        // Stateful Example
        this.state = {
            header: "Header from mutable 'state' (this.state)",
            content: "Content from mutable 'state' (this.state)",
            data: mydata1
        }
    }

    render() {
        return (
            <div>
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
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
                <hr />


                <br />
                <br />
                <br />
            </div>
        );
    }
}

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
export default App;
