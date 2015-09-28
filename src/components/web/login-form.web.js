import React, {Component} from 'react'

export default class LoginForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: null,
      password: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.state)
  }

  handleInputChange(input) {
    return ({target: {value}}) => {
      this.setState({[input]: value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input onChange={this.handleInputChange('email')}
                 placeholder="Email"
                 value={this.state.email}
                 type="email" />
        </div>
        <div>
          <input onChange={this.handleInputChange('password')}
                 placeholder="Password"
                 value={this.state.password}
                 type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}
