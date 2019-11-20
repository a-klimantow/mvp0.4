import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    color: ${p => p.theme.color};
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`
