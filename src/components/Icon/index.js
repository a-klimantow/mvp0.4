import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"

import icons from "./icons.json"

export const Icon = ({ type, ...props }) => {
  return (
    <Svg {...props}>
      <Path d={icons[type]} />
    </Svg>
  )
}

const Svg = styled.svg.attrs(p => ({
  viewBox: p.viewBox || "0 0 16 16",
  fill: p.color ? p.theme.colors[p.color] : "currentColor"
}))`
  width: 16px;
  height: 16px;
  fill: ${p => p.colorType};
  ${p =>
    p.hover &&
    css`
      transition: fill 0.3s ease-in-out;
      cursor: pointer
      &:hover {
        fill: ${p => p.theme.colors[p.hover]};
      }
    `}
`

const Path = styled.path.attrs(p => ({
  d: p.d,
  fillRule: "evenodd",
  clipRule: "evenodd"
}))``

Icon.propTypes = {
  type: t.oneOf([...Object.keys(icons)]).isRequired,
  color: t.oneOf(["success", "cold_water", "hot_water", "error"])
}
