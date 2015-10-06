import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'
import { deleteAuthToken from 'actions/auth'

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = { logout : deleteAuthToken {

@connect(
  mapStateToProps,
  mapDispatchToProps,)
export default class LogoutForm extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    this.props.logout()
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Logout
      </button>
    )
  }
}
