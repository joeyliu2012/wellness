import React, { Component, PropTypes } from 'react'

export default class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
