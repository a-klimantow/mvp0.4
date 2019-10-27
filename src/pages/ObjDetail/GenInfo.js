import React from "react"
import styled from "styled-components"
import { Empty } from "antd"

import { Ul, Text, ListEl } from "../../components"

const generalInfo = [["city", "Город"], ["street", "Улица"]]

export const GenInfo = ({info}) => {
  return (
    <>
      <Ul mt="24px">
        {!info && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {info &&
          generalInfo.map((item, i) => (
            <ElInfo key={i}>
              <Text view="second">{item[1]}</Text>
              <Text>{info[item[0]]}</Text>
            </ElInfo>
          ))}
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
