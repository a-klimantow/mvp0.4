import React, { useContext } from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router-dom"
import { Empty } from "antd"

import { Ul, Text, ListEl } from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"
import infoJSON from "./info.json"
import { ContextDevice } from "./context"
import { dateFormat } from "../../services/dateFormat"

const format = "DD.MM.YYYY"

const typeTranslator = type => {
  switch (type) {
    case "FlowMeter":
      return "Расходомер"
    case "Calculator":
      return "Вычислитель"
    default:
      return "Термодатчик"
  }
}

export const Info = ({ info }) => {
  const { url } = useRouteMatch()
  const { get } = useAxios()
  const { state, updateState } = useContext(ContextDevice)

  useEffectOnce(() => {
    // if (state.id === undefined) {
    get(url).then(updateState)
    // }
  })

  const listResourceValid =
    state.type === "FlowMeter"
      ? infoJSON
      : infoJSON.filter(item => item[0] !== "Диаметр")

  console.log(state)

  const renderList = listResourceValid.map((item, i) => {
    switch (item[2]) {
      case "date":
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{dateFormat(state[item[1]], format)}</Text>
          </ElInfo>
        )
      case "type":
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{typeTranslator(state[item[1]])}</Text>
          </ElInfo>
        )
      default:
        return (
          <ElInfo key={i}>
            <Text view="second">{item[0]}</Text>
            <Text>{state[item[1]]}</Text>
          </ElInfo>
        )
    }
  })

  return (
    <>
      <Ul mt="24px">
        {state.id ? renderList : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </Ul>
    </>
  )
}

const ElInfo = styled(ListEl)`
  ${Text} {
    width: 50%;
    font-size: 12px;
  }
`
