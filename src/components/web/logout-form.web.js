import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { logout } from 'actions/users'

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = { logout: logout }

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LogoutForm extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout()
  }

  render() {
    return (
      <button onClick= { this.handleClick } >
        Logout
      </button>
    )
  }
}
