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
      overflow: hidden; 
      position: relative;
    }
  }

  * {
    box-sizing: border-box;
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
    width: 100%;
    &::placeholder {
      color: ${p => p.theme.colors.disabled};
    }
  }

  button {
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }

  button.active {
    color: red;
  }

  span {
    font-size: 14px;  
    line-height: 22px;
    display: flex;
    align-items: center;
  
    &[data-size=small] {
      font-size: 12px;
      line-height: 20px;
    }
  }
`
