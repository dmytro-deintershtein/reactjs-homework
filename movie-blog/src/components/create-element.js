import React from 'react';

class createElement extends React.Component {
  render() {
    const element = React.createElement(
      'h1',
      null,
      'Hello world by React.createElement'
    );

    return element;
  }
}

export default createElement
