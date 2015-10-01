import { pushState } from 'redux-router'
import api from 'utils/api'
import { REQUEST_TOKEN, RECEIVE_TOKEN } from 'constants/action-types'

function requestLogin() {
  return {
    type: REQUEST_TOKEN,
  }
}

function receiveToken(token) {
  return {
    type: RECEIVE_TOKEN,
    payload: { token },
  }
}

export function fetchAuthToken(email, password) {
  return (dispatch) => {
    dispatch(requestLogin())
    api.post('/auth', {email, password})
       .then((resp) => resp.data.value)
       .then((token) => [
         receiveToken(token),
         pushState({}, '/home'),
       ].forEach(dispatch))
       .catch((err) => console.log(err))
  }
}
