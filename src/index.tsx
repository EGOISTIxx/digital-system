import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { GlobalStyles } from './global/GlobalStyles'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <GlobalStyles />
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
