import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-gap: 24px;
  margin-bottom: 24px;
  & > div {
    align-self: start;
  }
`
