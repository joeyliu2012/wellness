import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { logout } from 'actions/users'

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = { logout }

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LogoutButton extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  render() {
    return (
      <button onClick= { this.props.logout } >
        Logout
      </button>
    )
  }
}
