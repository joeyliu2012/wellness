import { RECEIVE_TOKEN, TOKEN_DELETED } from 'constants/action-types'
import { AUTH_HEADER } from 'constants/headers'


export default function auth(state = {
  token: localStorage.getItem(AUTH_HEADER),
}, action) {
  switch (action.type) {
  case RECEIVE_TOKEN:
    localStorage.setItem(AUTH_HEADER, action.payload)
    return {
      ...state,
      token: action.payload,
    }
  case TOKEN_DELETED:
    localStorage.removeItem(AUTH_HEADER)
    return {
      ...state,
      token: null,
    }
  default:
    return state
  }
}
