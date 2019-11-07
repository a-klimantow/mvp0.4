import styled, { css } from "styled-components"
//
import { addTextStyle } from "../styles"

const small = css`
  font-size: 12px;
  line-height: 20px;
`

export const Text = styled.span`
  ${addTextStyle};
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  color: ${p =>
    p.view === "second"
      ? p.theme.text.color.secondary
      : p.theme.text.color.primary};
  ${p => p.size === "small" && small};
  margin-left: ${p => p.ml};
  margin-right: ${p => p.mr};
`
