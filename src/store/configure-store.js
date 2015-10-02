import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from 'constants/routes'

import rootReducer from 'reducers/root-reducer'

export default function configureStore(initialState = {}) {
  const store = compose(
    applyMiddleware(
      thunkMiddleware,
      createLogger(),
    ),
    reduxReactRouter({
      routes,
      createHistory,
    })
  )(createStore)(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers/root-reducer', () => {
      const nextRootReducer = require('reducers/root-reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
