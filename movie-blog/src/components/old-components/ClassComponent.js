import React, {Component} from 'react';

class ComponentElement extends Component {
  render() {
    return (
      <h1 className="component-based">
        {this.props.phrase}
      </h1>
    )
  }
}

export default ComponentElement
