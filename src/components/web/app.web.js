import React, { Component } from 'react'

import { connect } from 'react-redux'

import SignupForm from 'components/web/signup-form'
import LoginForm from 'components/web/login-form'

@connect()
export default class App extends Component {
  render() {
    return (
      <div>
        <SignupForm />
        <LoginForm />
      </div>
    )
  }
}
