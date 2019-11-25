import React from "react"

import { Text, Icon } from "components"

const getType = resource => {
  if (resource === "Heat") return "resource_heat"
  if (resource === ("HotWaterSupply" || "ColdWaterSupply"))
    return "resource_water"
  return "resource_device"
}

const getColor = resource => {
  if (resource === "HotWaterSupply") return "hot_water"
  if (resource === "ColdWaterSupply") return "cold_water"
}

export const Device = ({ model, resource, serialNumber, type }) => {
  return (
    <Text>
      <Icon type={getType(resource)} color={getColor(resource)} />
      {model}
      <span className="number">({serialNumber})</span>
    </Text>
  )
}
