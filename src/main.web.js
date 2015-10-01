import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'store/configure-store'

import { ReduxRouter } from 'redux-router'
import routes from 'constants/routes'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>,
  document.getElementById('main')
)
