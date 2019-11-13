import styled from "styled-components"

export const ListEl = styled.li`
  padding-top: ${p => (p.size === "large" ? 24 : 12)}px;
  padding-bottom: ${p => (p.size === "large" ? 24 : 12)}px;
  border-bottom: ${p => p.theme.border};
  display: flex;
  /* div {
    width: 50%;
  } */
`
