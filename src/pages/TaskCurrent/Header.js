import React, { useContext } from "react"
import styled from "styled-components"
import { Spin } from "antd"

import { Title, Text, TimeLine, TimeCompleted, Timer } from "../../components"
import { Context } from "./context"

export const Header = () => {
  const { state } = useContext(Context)

  const {
    currentStage,
    name,
    creationTime,
    expectedCompletionTime,
    closingTime,
    isResponsible
  } = state

  return (
    <HeaderBlock>
      <Title weight={300} mb="8px">
        {currentStage ? currentStage.name : <Spin />}
      </Title>
      <Text>{name || <Spin size="small" />}</Text>
      {isResponsible && (
        <TimeLine finish={expectedCompletionTime} start={creationTime} />
      )}
      {closingTime ? (
        <TimeCompleted time={closingTime} />
      ) : (
        <Timer
          finishTime={expectedCompletionTime}
          text="Время на этап"
          mt="12px"
        />
      )}
    </HeaderBlock>
  )
}

const HeaderBlock = styled.div`
  margin-bottom: 24px;
`
