import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: ${p => p.theme.colors.body};
    background-color: ${p => p.theme.colors.bg};
    & > div#root {
     min-height: 100vh;

    }
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

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color .3s ease-in-out;
    :hover, &.active {
      color: ${p => p.theme.colors.primary};
    }
  }

  input, button {
    outline: none;
    color: inherit;
    font: inherit;
    width: 100%;
    border: 1px solid;
    border-color: ${p => p.theme.colors.border};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    min-height: 32px;
    &:disabled {
      background-color: ${p => p.theme.colors.bg_disabled};
      color: ${p => p.theme.colors.disabled};
      cursor: not-allowed;
    }
  }

  input {
    &::placeholder {
      color: ${p => p.theme.colors.disabled};
    }
  }

  button {
    justify-content: center;
    background-color: #fff;
  }
`
