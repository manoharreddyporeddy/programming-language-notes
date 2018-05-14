import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}

var MyHOCComponent = ComposedComponent => class extends React.Component {

    componentDidMount() {
        this.setState({
            data: 'New data from MyHOCComponent...'
        });
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }
};

export { MyComponent };
export default MyHOCComponent(MyComponent);
