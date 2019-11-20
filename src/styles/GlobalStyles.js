import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 30px;
    line-height: 38px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }

  h3 {
    font-size: 20px;
    line-height: 28px;
  }

  h4 {
    font-size: 16px;
    line-height: 24px;
  }
`
