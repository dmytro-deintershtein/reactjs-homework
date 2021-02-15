import React, { Component } from 'react';

class pureComponentElement extends React.PureComponent {
  render() {
    return (
      <h1 className="component-based">
        Hello World by Pure Component
      </h1>
    )
  }
}

export default pureComponentElement
