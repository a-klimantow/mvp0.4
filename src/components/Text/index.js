import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"

export const Text = ({ children, ...props }) => {
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

Text.propTypes = {
  children: t.string,
  size: t.oneOf(["small"]),
  as: t.oneOf(["h1", "h2", "h3", "h4"]),
  weight: t.oneOf([300, 400, 600])
}

Text.defaultProps = {
  weight: 400
}
