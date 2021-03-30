import React, {Component} from 'react';

class Container extends Component {
  render() {
    return (
      //TODO: add background set via props
      <div
        className={this.props.className}
        >
        {this.props.children}
      </div>
    )
  }
}

export default Container