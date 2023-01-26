import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { GifApp } from './GifApp'
import { store } from './store'
import { AppTheme } from './theme'

import './style.css'
import './animation.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <AppTheme>
          <GifApp />
        </AppTheme>
      </Provider>
    </BrowserRouter>
  //</React.StrictMode>,
)
