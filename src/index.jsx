// src/index.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import theme from 'assets/styles/theme'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
