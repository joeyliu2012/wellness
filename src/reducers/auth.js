import { AUTH_HEADER } from 'constants/headers'
import { RECEIVE_TOKEN } from 'constants/action-types'

export default function auth(state = {
  token: localStorage.getItem(AUTH_HEADER),
}, action) {
  switch(action.type) {
    case RECEIVE_TOKEN:
      localStorage.setItem(AUTH_HEADER, action.payload)
      return {
        token: action.payload
      }
    default:
      return state
  }
}
