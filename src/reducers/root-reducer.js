import { combineReducers } from 'redux'

import { REQUEST_LOGIN, RECEIVE_TOKEN } from 'constants/action-types'


export function login(state = {}, action) {
  switch(action.type) {
    case REQUEST_LOGIN:
      return state
    case RECEIVE_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  login,
})

export default rootReducer
