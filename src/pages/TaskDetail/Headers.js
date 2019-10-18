import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

// import { TaskDetailContext } from "./store"
import { Text as text, Title, TimeLine, Icon as icon } from "../../components"
import { useTimer } from "../../hooks"
import { dateFormat } from "../../services/dateFormat"

export const Headers = () => {
  // const { state } = useContext(TaskDetailContext)
  const {
    state: {
      name,
      currentStageName,
      creationTime,
      expectedCompletionTime,
      isResponsible
    }
  } = useLocation()
  const timer = useTimer(expectedCompletionTime)

  return (
    <div className="title">
      <Title weight={300} mb="8px">
        {currentStageName}
      </Title>
      <Text view="second">{name}</Text>
      {isResponsible && (
        <TimeLine finish={expectedCompletionTime} start={creationTime} />
      )}
      <div>
        <Text>
          <Icon type="timer" />
          Время на этап:
        </Text>
        <Text className="ml">{timer}</Text>
        <Text className="ml mr">
          (до {dateFormat(expectedCompletionTime, "DD.MM.YY")})
        </Text>
      </div>
    </div>
  )
}

const Text = styled(text)`
  font-size: 12px;
  line-height: 20px;
  &.mr {
    margin-right: 16px;
  }

  &.ml {
    margin-left: 4px;
  }
`

const Icon = styled(icon)`
  transform: translateY(2.6px);
  margin-right: 4px;
`
