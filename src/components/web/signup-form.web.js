import React, { Component } from 'react'

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <p>
            Create an account
        </p>
        <p>
            < input type="text" placeholder="Full Name"/>
        </p>
        <p>
            < input type="text" placeholder="Email" />
        </p>
        <p>
            < input type="text" placeholder="Password" />
        </p>
      </div>
    )
  }
}
