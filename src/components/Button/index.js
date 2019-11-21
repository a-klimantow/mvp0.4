import React from "react"
import styled, { css } from "styled-components"

import { margin, size, spin } from "styles"
import { Text, Icon } from "components"

export const Button = ({ children, icon, loading, ...props }) => {
  return (
    <ButtonWrap {...props}>
      <Text icon={icon}>{children}</Text>
      {loading && (
        <LoadingBlock onClick={e => e.preventDefault()}>
          <IconLoading />
        </LoadingBlock>
      )}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.button`
  ${margin};
  ${size};
  cursor: pointer;
  width: ${p => p.block && "100%"};
  position: relative;
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

const IconLoading = styled(Icon).attrs({
  type: "map"
})`
  position: absolute;
  top: 4px;
  right: 4px;
  ${spin};
`

const LoadingBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: progress;
`
