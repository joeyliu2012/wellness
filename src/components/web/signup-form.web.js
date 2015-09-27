import React, { Component } from 'react'

export default class SignupForm extends Component {

  handleSubmit(evt) {
    evt.preventDefault()
    console.log('Submit!')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Create an account</h4>
        <div>
          <input ref="fullName" type="text" placeholder="Full Name"/>
        </div>
        <div>
          <input ref="email" type="email" placeholder="Email"/>
        </div>
        <div>
          <input ref="password" type="password" placeholder="Password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
