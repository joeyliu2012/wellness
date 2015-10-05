import { Map, Set } from 'immutable'
import { COMPLETE_REQUEST, START_REQUEST } from 'constants/action-types'


export default function requests(state = Map({
  isLoading: 0,
  requests: Set(),
}), action = {}) {
  switch (action.type) {
  case START_REQUEST:
    return state.update('isLoading', (isLoading) => isLoading + 1)
                .update('requests', (requests) => requests.add(action.payload))
  case COMPLETE_REQUEST:
    return state.update('isLoading', (isLoading) => isLoading - 1)
                .update('requests', (requests) => requests.delete(action.payload))
  default:
    return state
  }
}
