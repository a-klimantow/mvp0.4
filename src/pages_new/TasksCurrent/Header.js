import React, { useContext } from "react"
import styled from "styled-components"
import { Spin } from "antd"

import { Title, Text, TimeLine, TimeCompleted, Timer } from "../../components"
import { TasksCurrentContext } from "./context"

export const Header = () => {
  const { state } = useContext(TasksCurrentContext)

  const {
    currentStage,
    currentStageName,
    name,
    creationTime,
    expectedCompletionTime,
    closingTime,
    isResponsible
  } = state

  if (!state.id) return <Spin />

  if (closingTime) {
    return (
      <HeaderBlock>
        <Title weight={300}>{name}</Title>
        <TimeCompleted time={closingTime} />
      </HeaderBlock>
    )
  }

  return (
    <HeaderBlock>
      <Title weight={300} mb="8px">
        {currentStageName || (currentStage && currentStage.name)}
      </Title>
      <Text>{name}</Text>
      {isResponsible && (
        <TimeLine finish={expectedCompletionTime} start={creationTime} />
      )}
      <Timer
        finishTime={expectedCompletionTime}
        text="Время на этап"
        mt="12px"
      />
    </HeaderBlock>
  )
}

const HeaderBlock = styled.div`
  margin-bottom: 24px;
`
