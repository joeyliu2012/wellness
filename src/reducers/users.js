import { RECEIVE_CURRENT_USER } from 'constants/action-types'

export default function users(state = {
  currentUser: null,
  usersById: {},
}, action) {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    const user = action.payload
    return {
      ...state,
      currentUser: user.id,
      usersById: {
        ...state.usersById,
        [user.id]: user,
      },
    }
  default:
    return state
  }
}
