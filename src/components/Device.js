import React from "react"
import styled from "styled-components"

import { Icon as icon, createIconDevice } from "./Icon"
import { Text as text } from "./Text"
import { addMargin } from "./styles"

export const Device = ({ device, ...props }) => {
  const { model, serialNumber, resource } = device

  const deviceIcon = createIconDevice(resource)

  return (
    <DeviceWrap {...props}>
      <Icon {...deviceIcon} />
      <Text className="model">{model}</Text>
      <Text view="second">({serialNumber})</Text>
    </DeviceWrap>
  )
}

const DeviceWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.primary};
`

const Text = styled(text).attrs(p => ({
  size: "small"
}))`
  &.model {
    margin-right: 4px;
  }
`

const Icon = styled(icon)`
  margin-right: 6px;
  transform: translateY(3px);
`
