import React from "react"
import styled from "styled-components"
import t from "prop-types"

import icons from "./icons.json"

export const Icon = ({ type, ...props }) => {
  if (type === "Calculator") type = "resource_device"
  if (type === "TemperatureSensor") type = "resource_water"
  if (type === "Calculator") type = "resource_device"

  return (
    <Svg viewBox="0 0 16 16" {...props} type={type}>
      <path fillRule="evenodd" clipRule="evenodd" d={icons[type]} />
    </Svg>
  )
}

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${p =>
    p.fill === "HotWaterSupply"
      ? p.theme.colors.water.hot
      : p.fill === "ColdWaterSupply"
      ? p.theme.colors.water.cold
      : "currentColor"};
  fill: ${p => p.type === "ok" && p.theme.colors.success};
`

Icon.propTypes = {
  type: t.oneOf([...Object.keys(icons), "Calculator", "TemperatureSensor"])
    .isRequired
}
