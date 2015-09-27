import { USER_CREATED } from 'constants/action-types'

export default function users(state = {}, action) {
  switch(action.type) {
    case USER_CREATED:
      return { ...state, currentUser: action.currentUser }
    default:
      return state
  }
}
