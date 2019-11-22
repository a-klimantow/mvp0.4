import styled from "styled-components"

export const Grid = styled.div`
  display: flex;
  width: 100%;
  > div.left {
    flex-grow: 8;
  }
  div.right {
    flex-grow: 4;
    margin-left: 24px;
  }
`
