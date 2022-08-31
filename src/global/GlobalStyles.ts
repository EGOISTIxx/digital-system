import 'antd/dist/antd.min.css'
import { createGlobalStyle } from 'styled-components'

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

  .ant-form-item-control-input-content {
    input {
      font-size: 0.8rem;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 0.866667px;

      &::placeholder {
        color: #D6DCE1 !important;
        font-weight: 700 !important;
      }
    }
  }

  .ant-input-affix-wrapper, 
  .ant-input-password, 
  .ant-form-item-control-input-content, 
  .ant-form-item-control-input,
  input {
    outline: 0;

    &:focus, &:hover, &:active {
      outline: 0;
    }
  }

  .ant-popover {
    .ant-popover-arrow {
      .ant-popover-arrow-content::before {
        background: #6C757D;
      }
    }

    .ant-popover-inner {
      background: #6C757D;

      .ant-popover-title {
        color: #FFFFFF;
      }
    }
  }
`
