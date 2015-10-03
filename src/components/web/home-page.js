import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import PhotoUploadForm from 'components/web/photo-upload-form'

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
        <p>You are now signed in as {user && user.fullName}</p>
        <PhotoUploadForm />
      </div>
    )
  }
}
