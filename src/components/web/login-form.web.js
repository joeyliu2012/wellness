import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'

import { fetchAuthToken } from 'actions/auth'

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = { login: fetchAuthToken }

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginForm extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
  }

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
    const { email, password } = this.state
    this.props.login(email, password)
    this.setState({email: null, password: null})
  }

  handleInputChange(input) {
    return ({target: {value}}) => {
      this.setState({[input]: value})
    }
  }

  render() {
    return (
      <div>
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
        <Link to="/signup">Don't have an account yet?</Link>
      </div>
    )
  }
}
