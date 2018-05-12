import React from 'react';
import Label from './Label';

class Button extends React.Component {
  render() {
    return <div><Label name={this.props.name} /></div>;
  }
}

export default Button;
