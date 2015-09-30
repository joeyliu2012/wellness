import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>You are now signed in as {this.props.currentUser && this.props.currentUser.fullName}</p>
      </div>
    )
  }
}
