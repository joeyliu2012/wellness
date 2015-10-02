import { makeApiRequest } from 'actions/api'
import { RECEIVE_CURRENT_USER } from 'constants/action-types'

export function userSignupSuccess(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: user,
  }
}

export function signupNewUser(fullName, email, password) {
  return makeApiRequest({
    url: '/api/users',
    method: 'post',
  }, {
    success: userSignupSuccess,
  }, {
    fullName,
    email,
    password,
  })
}
