import React from "react"
import styled from "styled-components"
// import { Empty } from "antd"

import { Ul, Text, ListEl, Loader, Empty } from "../../components"
import infoJSON from "./info.json"
import { dateFormat } from "../../services/dateFormat"

const format = "DD.MM.YYYY"

export const ListInfo = ({ device }) => {
  if (!device) return <Loader size="large" />
  if (!device.id) return <Empty center />

  const typeTranslator = type => {
    // console.log(type)
    switch (type) {
      case "FlowMeter":
        return "Расходомер"
      case "Calculator":
        return "Вычислитель"
      default:
        return "Термодатчик"
    }
  }

  const listResourceValid =
    device.type === "FlowMeter"
      ? infoJSON
      : infoJSON.filter(item => item[0] !== "Диаметр")

  // console.log(listResourceValid)

  const renderList = listResourceValid.map((item, i) => {
    switch (item[2]) {
      case "date":
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{dateFormat(device[item[1]], format)}</Text>
          </ElInfo>
        )
      case "type":
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{typeTranslator(device[item[1]])}</Text>
          </ElInfo>
        )
      default:
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{device[item[1]]}</Text>
          </ElInfo>
        )
    }
  })

  return (
    <>
      <Ul mt="24px">{renderList}</Ul>
    </>
  )
}

const ElInfo = styled(ListEl)`
  ${Text} {
    width: 50%;
    font-size: 12px;
  }
`
