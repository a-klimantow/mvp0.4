import React from "react"
import styled from "styled-components"

export const Text = ({ children, ...props }) => {
  return <Span {...props}>{children}</Span>
}

const Span = styled.span`
  margin: 0;
  color: ${p => p.as === "h1" && "green"};
`
