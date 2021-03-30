import React, {Component} from 'react';

class Label extends Component {
  render() {
    return (
      //TODO: add text set via props
      <label className={this.props.className}>{this.props.text}</label>
    )
  }
}

export default Label