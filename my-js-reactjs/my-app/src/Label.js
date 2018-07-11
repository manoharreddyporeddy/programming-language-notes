import React from 'react';

class Label extends React.Component {
  render() {
    return <span>Hello {this.props.name}</span>;
  }
}

export default Label;
