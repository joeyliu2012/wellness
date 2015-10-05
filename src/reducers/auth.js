import { Map } from 'immutable'
import { RECEIVE_TOKEN } from 'constants/action-types'
import { AUTH_HEADER } from 'constants/headers'


export default function auth(state = Map({
  token: localStorage.getItem(AUTH_HEADER),
}), action = {}) {
  switch (action.type) {
  case RECEIVE_TOKEN:
    localStorage.setItem(AUTH_HEADER, action.payload)
    return state.set('token', action.payload)
  default:
    return state
  }
}
