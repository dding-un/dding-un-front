// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body { 
    margin: 0;
    padding: 0;
    min-height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`