import { css } from "styled-components"

export const hover = css`
  [data-hover] {
    transition: color 0.2s ease-in-out;
  }

  &:hover [data-hover] {
    color: ${p => p.theme.colors.primary};
  }
`
