import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import {
  Title as title,
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
  const { push } = useHistory()
  const { state } = useContext(Context)
  const { device, housingStockId } = state

  if (!device) return null
  const format = "DD.MM.YYYY"
  const deviceIcon = createIconDevice(device.resource)
  // console.log(device)

  const listResourceValid =
    device.type === "FlowMeter"
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
        <Link
          className="link"
          to={`/HousingStocks/${housingStockId}/Devices/${device.id}`}
        >
          <IconDevice {...deviceIcon} /> {device.model} ({device.serialNumber})
        </Link>
      </Title>
      <Ul>{renderElements}</Ul>
    </>
  )
}

const Title = styled(title).attrs({
  level: 3
})`
  margin: 24px 0 16px;
  .link {
    color: inherit;
    &:hover {
      color: ${p => p.theme.color.primary};
      svg: {
        fill: inherit;
      }
    }
  }
`

const IconDevice = styled(Icon)`
  width: 19px;
  height: 19px;
  transform: translateY(2px);
`

const Li = styled(ListEl)`
  & > * {
    width: 50%;
  }
`
