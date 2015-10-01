import { pushState } from 'redux-router'
import { makeApiRequest } from 'actions/api'
import { RECEIVE_TOKEN } from 'constants/action-types'

function receiveToken({ value }) {
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
    success: receiveToken,
  }, {
    email,
    password,
  })
}
