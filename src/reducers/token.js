import { REQUEST_TOKEN, RECEIVE_TOKEN } from 'constants/action-types'
import { AUTH_HEADER } from 'constants/headers'


export default function token(state = {
  token: localStorage.getItem(AUTH_HEADER),
}, action) {
  switch (action.type) {
  case REQUEST_TOKEN:
    return state
  case RECEIVE_TOKEN:
    localStorage.setItem(AUTH_HEADER, action.payload.token)
    return {
      ...state,
      token: action.payload.token,
    }
  default:
    return state
  }
}
