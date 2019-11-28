import styled, { css } from "styled-components"

export const Block = styled.div`
  display: grid;
  grid-gap: ${p => p.gap || 8}px;
  ${p =>
    p.child &&
    css`
      *:nth-child(${p.child}) {
        justify-self: ${p.justify};
      }
    `}
`
