import React, { useContext } from "react"
import styled from "styled-components"

import {
  Title,
  Icon,
  createIconDevice,
  Text,
  Ul,
  ListEl
} from "../../components"
import { Context } from "./context"
import deviceList from "./device.json"
import { dateFormat } from "../../services/dateFormat"

export const ListDevice = () => {
  const { state } = useContext(Context)
  const { device } = state

  if (!device) return null
  const format = "DD.MM.YYYY"
  const deviceIcon = createIconDevice(device.resource)
  // console.log(device)

  const listResourceValid = device.type === "FlowMeter"
    ? deviceList
    : deviceList.filter(item => item[0] !== "Диаметр")

  const renderElements = listResourceValid.map((item, i) => {
    if (item[2] === "date") {
      return (
        <Li key={i}>
          <Text view="second">{item[0]}</Text>
          <Text>{dateFormat(device[item[1]], format)}</Text>
        </Li>
      )
    }
    return (
      <Li key={i}>
        <Text view="second">{item[0]}</Text>
        <Text>{device[item[1]]}</Text>
      </Li>
    )
  })

  return (
    <>
      <Title level={3} mb="16px" mt="24px">
        <IconDevice {...deviceIcon} /> {device.model} ({device.serialNumber})
      </Title>
      <Ul>
        {renderElements}
        {/* <Li>
          <Text></Text>
        </Li> */}
      </Ul>
    </>
  )
}

const IconDevice = styled(Icon)`
  transform: translateY(1px);
`

const Li = styled(ListEl)`
  & > * {
    width: 50%;
  }
`
