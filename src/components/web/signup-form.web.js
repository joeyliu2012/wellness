import React, { Component } from 'react'

import api from 'utils/api'

const INITIAL_STATE = {
  fullName: null,
  email: null,
  password: null,
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
    api.post('/users', this.state)
       .then((resp) => this.setState(INITIAL_STATE))
       .catch((err) => console.error(err))
  }

  handleInputChange(input) {
    return ({target: {value}}) => {
      this.setState({[input]: value})
    }
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
        <button type="submit">Submit</button>
      </form>
    )
  }
}
