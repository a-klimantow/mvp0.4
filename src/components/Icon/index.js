import React from "react"
import styled from "styled-components"
import t from "prop-types"

import icons from "./icons.json"

export const Icon = ({ type, ...props }) => {
  let colorType = null
  switch (type) {
    case "Heat":
      type = "resource_heat"
      colorType = "currentColor"
      break
    case "HotWaterSupply":
      type = "resource_water"
      colorType = p => p.theme.colors.water.hot
      break
    case "ColdWaterSupply":
      type = "resource_water"
      colorType = p => p.theme.colors.water.cold
      break
    case "alarm":
      colorType = p => p.theme.colors.error
      break
    case "ok":
      colorType = p => p.theme.colors.success
      break
    default:
      colorType = "currentColor"
  }

  return (
    <Svg viewBox="0 0 16 16" type={type} colorType={colorType} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d={icons[type]} />
    </Svg>
  )
}

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${p => p.colorType};
`

Icon.propTypes = {
  type: t.oneOf([
    ...Object.keys(icons),
    "Heat",
    "ColdWaterSupply",
    "HotWaterSupply"
  ]).isRequired
}
