import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

@connect(
  (state) => state.token,
  { pushState }
)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
  }

  componentWillMount() {
    if (!this.props.token) this.props.pushState({}, '/login')
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
