import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {
         // TODO: actually store `currentUser` in the store.
         // probably a good idea to modify the auth endpoint
         // to return both the token and currentUser object
        }
        <p>You are now signed in as {this.props.currentUser && this.props.currentUser.fullName}</p>
      </div>
    )
  }
}
