import { combineReducers } from 'redux'

import token from 'reducers/token'
import users from 'reducers/users'

const rootReducer = combineReducers({
  token,
  users,
})

export default rootReducer
