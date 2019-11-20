import React from "react"
import styled from "styled-components"
import t from "prop-types"

import icons from "./icons.json"

export const Icon = ({ type, ...props }) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d={icons[type]} />
    </Svg>
  )
}

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`

Icon.propTypes = {
  type: t.oneOf([...Object.keys(icons)]).isRequired
}
