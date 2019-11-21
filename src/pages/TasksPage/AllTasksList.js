import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import { Li, Row, Title, Text as text } from "components"
import { useTasksPageContext } from "./useTasksPageContext"

export const AllTasksList = () => {
  const { state } = useTasksPageContext()
  const { items } = state
  const { push } = useHistory()
  return (
    <ul>
      {items &&
        items.map(item => (
          <Li key={item.id} onClick={() => push(item.url)} size="big" link>
            <Row>
              <Title as="h4" weight={600} mr="auto">
                {item.currentStageName}
              </Title>
              <Text>{item.name}</Text>
            </Row>
            <Row mt="8px" mb="16px">
              <Text icon="timer">
                Время на этап: timer (до{" "}
                {new Date(item.expectedCompletionTime).toLocaleDateString()})
              </Text>
            </Row>
            <Row>
              <Text icon={item.device.type} iconColor={item.device.resource}>
                {item.device.model}
              </Text>
              <Text view="secondary" ml="4px" mr="20px">
                ({item.device.serialNumber})
              </Text>
              <Text icon="map">{item.address}</Text>
              <Text icon="calendar" view="secondary" ml="auto" mr="20px">
                data
              </Text>
              <Text icon="number" view="secondary">
                {item.number}
              </Text>
            </Row>
          </Li>
        ))}
    </ul>
  )
}

const Text = styled(text).attrs({
  size: "small"
})``
