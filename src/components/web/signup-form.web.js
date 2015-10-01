import React, { Component } from 'react'
import { Link } from 'react-router'

import api from 'utils/api'

const INITIAL_STATE = {
  fullName: null,
  email: null,
  password: null,
  resp: null, // This is really bad and we should get rid of it soon.
}


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
    api.post('/users', { fullName, email, password })
       .then((resp) => this.setState({
         ...INITIAL_STATE,
         resp,
       }))
       .catch((err) => console.error(err))
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
      <div>
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
        </form>
        <Link to="/login">Already have an account?</Link>
      </div>
    )
  }
}
