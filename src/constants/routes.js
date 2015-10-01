import React from 'react'

import { Route } from 'react-router'

import App from 'components/web/app'
import LoginForm from 'components/web/login-form'
import SignupForm from 'components/web/signup-form'
import HomePage from 'components/web/home-page'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/home" component={HomePage} />
  </Route>
)
