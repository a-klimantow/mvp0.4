import { createGlobalStyle } from "styled-components"
import { size } from "styles"

export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: ${p => p.theme.colors.body};
    background-color: ${p => p.theme.colors.bg};
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
    &:hover, &.active {
      color: ${p => p.theme.colors.primary};
    }
  }

  input, button, textarea, span[data-upload] {
    outline: none;
    color: inherit;
    font: inherit;
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    min-height: 32px;
    border-color: ${p => p.theme.colors.border};
    transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    :not(:disabled):hover,
    :focus {
      border-color: ${p => p.theme.colors.primary};
    }
    :focus {
      box-shadow: 0 0 0 2px ${p => p.theme.colors.secondary};
    }
    &:disabled {
      background-color: ${p => p.theme.colors.bg_disabled};
      color: ${p => p.theme.colors.disabled};
      cursor: not-allowed;
    }

    &[data-size=big] {
      min-height: 40px;
      font-size: 16px;
    }
    &[data-size=small] {
      min-height: 24px;
    }
  }

  input, textarea {

    width: 100%;
    &::placeholder {
      color: ${p => p.theme.colors.disabled};
    }
  }

  button, span[data-upload] {
    justify-content: center;
    background-color: #fff;
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

  div.dummy {
    position: absolute;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
  }
`
