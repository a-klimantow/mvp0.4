import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import { Li, Row, Title, Text as text, TimeLine } from "components"

export const AllTasksList = ({ items, loading }) => {
  const { push } = useHistory()
  if (!items || loading) return <>loading...</>
  return (
    <ul>
      {items &&
        items.map(item => (
          <Li
            key={item.id}
            onClick={() => push(`/tasks/${item.id}`, { ...item })}
            size="big"
            link
            column
          >
            {item.closingTime ? (
              <Row>
                <Text icon="ok">Выполнено за 12д 14ч</Text>
              </Row>
            ) : item.isResponsible ? (
              <Row mb="8px">
                <TimeLine
                  start={item.creationTime}
                  finish={item.expectedCompletionTime}
                />
                <Text ml="8px">time</Text>
              </Row>
            ) : null}
            {item.closingTime ? (
              <Row mb="8px">
                <Title as="h4" weight={600} mr="auto">
                  {item.name}
                </Title>
              </Row>
            ) : (
              <Row mb="8px">
                <Title as="h4" weight={600} mr="auto" data-hover>
                  {item.currentStageName}
                </Title>
                <Text>{item.name}</Text>
              </Row>
            )}
            {item.closingTime ? null : (
              <Row mb="16px">
                <Text icon="timer">
                  Время на этап: timer (до{" "}
                  {new Date(item.expectedCompletionTime).toLocaleDateString()})
                </Text>
              </Row>
            )}
            <Row>
              <Text icon={item.device.resource || "resource_device"}>
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