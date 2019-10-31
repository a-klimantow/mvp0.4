import React, { useContext } from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router-dom"
import { Empty } from "antd"

import { Ul, Text, ListEl } from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"
import infoJSON from "./info.json"
import { ContextHouses } from "./context"

export const Info = ({ info }) => {
  const { url } = useRouteMatch()
  const { get } = useAxios()
  const { state, updateState } = useContext(ContextHouses)

  useEffectOnce(() => !state.id && get(url).then(updateState))

  return (
    <>
      <Ul mt="24px">
        {state.id ? (
          infoJSON.map((item, i) => (
            <ElInfo key={i}>
              <Text view="second">{item[0]}</Text>
              <Text>{state[item[1]]}</Text>
            </ElInfo>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
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
