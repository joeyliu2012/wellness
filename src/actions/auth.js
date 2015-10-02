import { pushState } from 'redux-router'
import { makeApiRequest } from 'actions/api'
import {userAndTokenReceived } from 'actions/users'
import { RECEIVE_TOKEN } from 'constants/action-types'

export function receiveToken({token: { value }}) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_TOKEN,
      payload: value,
    })
    dispatch(pushState({}, '/home'))
  }
}

export function fetchAuthToken(email, password) {
  return makeApiRequest({
    url: '/api/auth',
    method: 'post',
  }, {
    success: userAndTokenReceived,
  }, {
    email,
    password,
  })
}
