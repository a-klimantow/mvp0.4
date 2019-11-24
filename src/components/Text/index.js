import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"

import { Icon } from "components"
import { margin } from "styles"

export const Text = ({ children, icon, ...props }) => {
  return (
    <Span {...props}>
      {icon && <Icon type={icon} />}
      {children}
    </Span>
  )
}

const Span = styled.span`
  ${margin};
  display: inline-flex;
  align-items: center;
  font-weight: ${p => p.weight};

  svg {
    margin-right: 6px;
  }

  ${p =>
    p.size === "small" &&
    css`
      font-size: 12px;
      line-height: 20px;
    `}

  color: ${p => (p.view === "secondary" ? p.theme.colors.caption : "inherit")};
`

Text.propTypes = {
  children: t.any,
  size: t.oneOf(["small", "normal"]),
  weight: t.oneOf([300, 400, 600])
}

Text.defaultProps = {
  weight: 400,
  size: "normal"
}
