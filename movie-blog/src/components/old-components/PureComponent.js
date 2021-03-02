import React, { Component } from 'react';

class PureComponentElement extends React.PureComponent {
  render() {
    return (
      <h1 className="component-based">
        {this.props.phrase}
      </h1>
    )
  }
}

export default PureComponentElement
