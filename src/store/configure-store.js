import { createStore } from 'redux'
import rootReducer from 'reducers/root-reducer'

export default function configureStore(init) {
  const store = createStore(rootReducer, init)

  if (module.hot) {
    module.hot.accept('reducers/root-reducer', () => {
      const nextReducer = require('reducers/root-reducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
