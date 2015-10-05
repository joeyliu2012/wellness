import { Map } from 'immutable'
import { RECEIVE_CURRENT_USER } from 'constants/action-types'

export default function users(state = Map({
  currentUser: null,
  usersById: Map(),
}), action = {}) {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    const user = action.payload.user
    return state.set('currentUser', user.id)
                .update('usersById', (usersById) => usersById.set(user.id, user))
  default:
    return state
  }
}
