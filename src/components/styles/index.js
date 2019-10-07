import { css } from "styled-components"

export const addMargin = css`
  margin: ${p => p.m || 0};
  margin-top: ${p => p.mt};
  margin-left: ${p => p.ml};
  margin-right: ${p => p.mr};
  margin-bottom: ${p => p.mb};
`
export const addPadding = css`
  padding: ${p => p.p || 0};
  padding-top: ${p => p.pt};
  padding-left: ${p => p.pl};
  padding-right: ${p => p.pr};
  padding-bottom: ${p => p.pb};
`
export const addTextStyle = css`
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => color || "#272F5A"};
`
