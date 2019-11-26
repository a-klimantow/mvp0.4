import React from "react"
import styled from "styled-components"

import { margin } from "styles"
import { Text } from "components"

export const Label = ({ children, label, ...props }) => (
  <LabelWrap {...props}>
    {label ? <span data-size="small">{label}</span> : null}
    {children}
  </LabelWrap>
)

const LabelWrap = styled.label`
  ${margin};
  display: block;
  span {
    display: block;
    margin-bottom: 8px;
    color: ${p => p.theme.colors.caption};
  }
`
