import { combineReducers } from 'redux-immutablejs'
import auth from 'reducers/auth'
import users from 'reducers/users'
import requests from 'reducers/requests'
import { routerStateReducer } from 'redux-router'

const rootReducer = combineReducers({
  auth,
  requests,
  users,
  router: routerStateReducer,
})

export default rootReducer
