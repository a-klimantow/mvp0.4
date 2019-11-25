import styled, { css } from "styled-components"

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: ${p => p.theme.spaces[p.spaces]}px;
  }

  ${p =>
    p.autoAt &&
    css`
      > *:nth-child(${p.autoAt}) {
        margin-right: auto;
      }
    `}
`
