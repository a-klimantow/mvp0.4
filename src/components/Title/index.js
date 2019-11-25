import React from "react"
import styled from "styled-components"

import { margin } from "styles"
import { Icon } from "components"

export const Title = styled.h1`
  ${margin};
  color: ${p => p.theme.colors.title};
  font-weight: ${p => p.weight || 400};
  font-size: ${p =>
    p.as === "h2" ? 24 : p.as === "h3" ? 20 : p.as === "h4" ? 16 : 30}px;
  line-height: 38px;
  display: flex;
  align-items: center;

  svg {
    width: ${p =>
      p.as === "h2" ? 24 : p.as === "h3" ? 20 : p.as === "h4" ? 16 : 30}px;
    height: auto;
    margin-right: 8px;
  }
`
