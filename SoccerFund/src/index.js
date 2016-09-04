import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import entries from './reducers'
import App from './App'

let store = createStore(
  entries,
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
