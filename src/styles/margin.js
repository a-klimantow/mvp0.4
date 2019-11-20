import { css } from "styled-components"
export const margin = p => css`
  margin: ${p.mt || 0} ${p.mr || 0} ${p.mb || 0} ${p.ml || 0};
`
