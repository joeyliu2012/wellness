import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import users from 'reducers/users'
import requests from 'reducers/requests'
import { routerStateReducer } from 'redux-router'
import meals from 'reducers/meals'

const rootReducer = combineReducers({
  auth,
  requests,
  users,
  meals,
  router: routerStateReducer
})

export default rootReducer
