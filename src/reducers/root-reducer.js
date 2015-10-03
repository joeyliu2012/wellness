import { combineReducers } from 'redux'

import auth from 'reducers/auth'
import users from 'reducers/users'
import requests from 'reducers/requests'
import photos from 'reducers/photos'
import { routerStateReducer } from 'redux-router'

const rootReducer = combineReducers({
  auth,
  requests,
  users,
  photos,
  router: routerStateReducer,
})

export default rootReducer
