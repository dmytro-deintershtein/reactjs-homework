import React, { Component } from 'react'

class CreateElement extends Component {
  render() {
    const element = React.createElement(
      'h1',
      null,
      this.props.phrase
    );

    return element;
  }
}

export default CreateElement
