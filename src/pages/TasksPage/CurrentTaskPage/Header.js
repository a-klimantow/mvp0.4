import React from "react"

import { Title, Text, TimeLine, Row, Block } from "components"

export const Header = ({ state }) => {
  const { currentStage = {}, expectedCompletionTime, creationTime } = state
  return (
    <div>
      {state.closingTime ? (
        <Title weight={300} mb="8px">
          {state.name}
        </Title>
      ) : (
        <>
          <Title weight={300} mb="8px">
            {currentStage.name || "Loading..."}
          </Title>
          <Text>{state.name}</Text>
        </>
      )}
      <TimeLine time={{ expectedCompletionTime, creationTime }} />

      {state.creationTime ? null : <Text icon="timer">timer</Text>}
    </div>
  )
}
