import { USER_SIGNUP_SUCCESS } from 'constants/action-types'

export default function users(state = {
  currentUser: null,
  usersById: {},
}, action) {
  switch (action.type) {
  case USER_SIGNUP_SUCCESS:
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
