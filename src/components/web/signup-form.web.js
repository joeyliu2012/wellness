import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createUserInDatabase } from 'actions/users'

const INITIAL_STATE = {
  fullName: null,
  email: null,
  password: null,
}

@connect(
  (state) => state.users,
  { createUserInDatabase }
)
export default class SignupForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = INITIAL_STATE
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const { fullName, email, password } = this.state
    this.props.createUserInDatabase(email, password, fullName)
  }

  handleInputChange(input) {
    return ({target: {value}}) => {
      this.setState({[input]: value})
    }
  }

  isFormDisabled() {
    return Object.keys(this.state).filter((key) => key !== 'resp')
                                  .map((input) => !this.state[input])
                                  .reduce((a, b) => a || b, false)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Create an account</h4>
        <div>
          <input onChange={this.handleInputChange('fullName')}
                 value={this.state.fullName}
                 type="text"
                 placeholder="Full Name"/>
        </div>
        <div>
          <input onChange={this.handleInputChange('email')}
                 value={this.state.email}
                 type="email"
                 placeholder="Email"/>
        </div>
        <div>
          <input onChange={this.handleInputChange('password')}
                 value={this.state.password}
                 type="password"
                 placeholder="Password"/>
        </div>
        <button type="submit"
                disabled={this.isFormDisabled()} >
          Submit
        </button>
        <pre>{JSON.stringify(this.props.currentUser)}</pre>
      </form>
    )
  }
}
