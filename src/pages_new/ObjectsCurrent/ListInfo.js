import React from "react"
import styled from "styled-components"
import { Empty } from "antd"

import { Ul, Text, ListEl } from "../../components"
// import infoJSON from "./info.json"

export const ListInfo = ({ info, state }) => {
  return (
    <>
      <Ul mt="24px">
        {state.id ? (
          info.map((item, i) => (
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
