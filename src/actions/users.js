import { makeApiRequest } from 'actions/api'
import { receiveToken } from 'actions/auth'
import { RECEIVE_CURRENT_USER } from 'constants/action-types'

export function receiveCurrentUser(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: user,
  }
}

export function userAndTokenReceived(data) {
  return (dispatch) => {
    dispatch(receiveCurrentUser(data))
    dispatch(receiveToken(data))
  }
}

export function signupNewUser(fullName, email, password) {
  return makeApiRequest({
    url: '/api/users',
    method: 'post',
  }, {
    success: userAndTokenReceived,
  }, {
    fullName,
    email,
    password,
  })
}
