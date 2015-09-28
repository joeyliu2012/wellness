import React, { Component } from 'react'

import SignupForm from 'components/web/signup-form'
import LoginForm from 'components/web/login-form'

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
