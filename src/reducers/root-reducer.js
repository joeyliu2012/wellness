import { combineReducers } from 'redux'

import auth from 'reducers/auth'
import requests from 'reducers/requests'
import { routerStateReducer } from 'redux-router'

const rootReducer = combineReducers({
  auth,
  requests,
  router: routerStateReducer,
})

export default rootReducer
