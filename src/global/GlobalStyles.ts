import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 100vw;
  }

  html, body {
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  
  a {
    color: #ffffff !important;
    text-decoration: none;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    margin-bottom: 0;
  }
  
  li > * {
    color: #ffffff !important;
  }
`
