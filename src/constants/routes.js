import React from 'react'

import { Route } from 'react-router'

import App from 'components/web/app'
import LoginForm from 'components/web/login-form'
import SignupForm from 'components/web/signup-form'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </Route>
)
