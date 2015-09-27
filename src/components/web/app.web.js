import React, { Component } from 'react'
import SignupForm from 'components/web/signup-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from 'actions/users'

@connect()
export default class App extends Component {
  render() {
    const { users, dispatch } = this.props
    const actions = bindActionCreators(UserActions, dispatch)
    return (
      <div>
        <SignupForm createUser={actions.createUser} />
      </div>
    )
  }
}
