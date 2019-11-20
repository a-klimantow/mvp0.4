import { css } from "styled-components"

export const size = p =>
  p.size === "big" &&
  css`
    min-height: 40px;
    font-size: 16px;
  `
