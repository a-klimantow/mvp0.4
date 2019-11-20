import React from "react"
import styled, { css } from "styled-components"

import { margin, size } from "styles"

export const Button = ({ ...props }) => {
  return <ButtonWrap {...props}></ButtonWrap>
}

const ButtonWrap = styled.button`
  ${margin};
  ${size};
  cursor: pointer;
  transition-property: box-shadow, color, border-color, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:not(:disabled):hover,
  :focus {
    box-shadow: 0 0 0 4px ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.primary};
  }

  ${p =>
    p.view === "primary" &&
    css`
      background-color: ${p.theme.colors.primary};
      color: #fff;
      &:not(:disabled):hover,
      :focus {
        opacity: 0.8;
        box-shadow: 0 0 0 4px ${p => p.theme.colors.secondary};
        color: #fff;
        border-color: ${p => p.theme.colors.primary};
      }

      &:not(:disabled):active {
        opacity: 1;
        box-shadow: none;
      }
    `};
`
