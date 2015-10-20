import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LogoutButton from 'components/web/logout-button'

function mapStateToProps(state) {
  return state.users
}

@connect(
  mapStateToProps
)
export default class HomePage extends Component {

  static propTypes = {
    currentUser: PropTypes.number,
    usersById: PropTypes.object,
  }

  render() {
    const { currentUser, usersById } = this.props
    const user = usersById[currentUser]
    return (
      <div>
        <h1>Hello!</h1>
        {
         // TODO: actually store `currentUser` in the store.
         // probably a good idea to modify the auth endpoint
         // to return both the token and currentUser object
        }
        <p>You are now signed in as {user && user.fullName}</p>
        <LogoutButton />
      </div>
    )
  }
}
