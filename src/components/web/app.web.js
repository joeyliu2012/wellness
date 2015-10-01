import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

function mapStateToProps(state) {
  return state.token
}

const mapDispatchToProps = { pushState }

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class App extends Component {

  static propTypes = {
    token: PropTypes.string,
    pushState: PropTypes.func.isRequired,
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
