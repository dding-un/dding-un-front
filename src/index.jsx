// src/index.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/GlobalStyle'
import theme from 'styles/theme'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
