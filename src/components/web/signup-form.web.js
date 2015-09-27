import React, { Component } from 'react'

export default class SignupForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      fullName: null,
      email: null,
      password: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(input) {
    return ({target: {value}}) => {
      this.setState({[input]: value})
    }
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createUser(this.state)
  }

  isFormDisabled() {
    return Object.keys(this.state)
                 .map((input) => !this.state[input])
                 .reduce((empty, acc) => empty || acc) 
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
        <button type="submit" disabled={this.isFormDisabled()}>Submit</button>
      </form>
    )
  }
}
