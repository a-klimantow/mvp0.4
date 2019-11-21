import styled from "styled-components"

export const Li = styled.li`
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.border};
  padding: ${p => (p.size === "big" ? 24 : 12)}px 0;
  cursor: ${p => p.link && "pointer"};
  h4 {
    transition: color 0.2s ease-in-out;
  }
  &:hover h4 {
    color: ${p => p.theme.colors.primary};
  }
`
