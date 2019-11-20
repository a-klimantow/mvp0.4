import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"

import { Icon } from "components"

export const Text = ({ children, as, icon, ...props }) => {
  if (icon)
    return (
      <WithIcon as={as} {...props}>
        <Icon type={icon} />
        <Span {...props}>{children}</Span>
      </WithIcon>
    )

  return <Span {...props}>{children}</Span>
}

const Span = styled.span`
  margin: 0;
  font-weight: ${p => p.weight};
  ${p =>
    p.size === "small" &&
    css`
      font-size: 12px;
      line-height: 20px;
    `}
`

const WithIcon = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  svg {
    width: ${p => (p.as ? 24 : 16)}px;
    height: 100%;
  }
  ${Span} {
    margin-left: ${p => (p.as ? 8 : 6)}px;
  }
`

Text.propTypes = {
  children: t.string,
  size: t.oneOf(["small"]),
  as: t.oneOf(["h1", "h2", "h3", "h4"]),
  weight: t.oneOf([300, 400, 600])
}

Text.defaultProps = {
  weight: 400
}
