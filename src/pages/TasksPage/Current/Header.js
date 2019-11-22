import React from "react"

import { Title, Text, TimeLine, Row, Block } from "components"
import { useTasksPageContext } from "../useTasksPageContext"

export const Header = () => {
  const { state } = useTasksPageContext()
  return (
    <Block mt="24px" mb="24px">
      {state.closingTime ? (
        <Title weight={300} mb="8px">
          {state.name}
        </Title>
      ) : (
        <>
          <Title weight={300} mb="8px">
            {state.currentStageName}
          </Title>
          <Text>{state.name}</Text>
        </>
      )}
      <Row>
        <TimeLine
          start={state.creationTime}
          finish={state.expectedCompletionTime}
        />
        <Text size="small" ml="8px">
          time
        </Text>
      </Row>
      {state.creationTime ? null : <Text icon="timer">timer</Text>}
    </Block>
  )
}
