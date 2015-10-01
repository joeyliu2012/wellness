import { combineReducers } from 'redux'

import { routerStateReducer } from 'redux-router'
import token from 'reducers/token'

const rootReducer = combineReducers({
  token,
  router: routerStateReducer,
})

export default rootReducer
