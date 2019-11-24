import styled, { css } from "styled-components"

export const Li = styled.li`
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.border};
  padding: ${p => (p.size === "big" ? 24 : 12)}px 0;
  cursor: ${p => p.link && "pointer"};
  display: flex;
  align-items: center;
  [data-hover] {
    transition: color 0.2s ease-in-out;
  }
  &:hover [data-hover] {
    color: ${p => p.theme.colors.primary};
  }
  ${p =>
    p.column &&
    css`
      flex-direction: column;
      align-items: initial;
    `}
`
