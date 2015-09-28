import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'store/configure-store'

import App from 'components/web/app'

const store = configureStore()

import { fetchAuthToken } from 'actions/login'
window.fetchAuthToken = fetchAuthToken
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
