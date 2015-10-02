import { CREATE_USER, USER_CREATED } from 'constants/action-types'

export default function users(state = {
  currentUser: null,
}, action) {
  switch (action.type) {
  case CREATE_USER:
    return state
  case USER_CREATED:
    return {
      ...state,
      currentUser: action.payload,
    }
  default:
    return state
  }
}
