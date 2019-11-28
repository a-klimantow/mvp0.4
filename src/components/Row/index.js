import styled, { css } from "styled-components"

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${p => p.grid};
  grid-column-gap: ${p => p.gapCol || 16}px;
  align-items: ${p => p.align || "initial"};
  justify-items: ${p => p.justify || "initial"};
`
