import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
  return { html }
}
