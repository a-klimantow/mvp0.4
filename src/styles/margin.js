import { css } from "styled-components"
export const margin = p => css`
  margin: 0;
  margin-top: ${p => p.mt};
  margin-bottom: ${p => p.mb};
  margin-left: ${p => p.ml};
  margin-right: ${p => p.mr};
`
