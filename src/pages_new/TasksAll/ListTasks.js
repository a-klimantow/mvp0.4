import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import {
  Ul,
  ListEl as li,
  Loader,
  Empty,
  Row,
  Title,
  TimeLine,
  Text,
  TimeCompleted,
  Timer,
  User,
  Device,
  TimeCreate,
  Number,
  Address
} from "../../components"

export const ListTasks = ({ data, loading, tab }) => {
  const { push } = useHistory()
  if (!data || loading) return <Loader />
  if (data.length === 0) return <Empty center />

  return (
    <Ul>
      {data.map(item => (
        <ListEl
          size="large"
          key={item.id}
          onClick={() => push(`/tasks/${item.id}`, { ...item })}
        >
          {item.isResponsible && !item.closingTime ? (
            <TimeLine
              finish={item.expectedCompletionTime}
              start={item.creationTime}
            />
          ) : null}
          {item.closingTime && <TimeCompleted time={item.closingTime} />}
          <Row mb="8px">
            {!item.closingTime ? (
              <>
                <Title level={4} className="title" mr="auto">
                  {item.currentStageName}
                </Title>
                <Text>{item.name}</Text>
              </>
            ) : (
              <Title level={4} className="title">
                {item.name}
              </Title>
            )}
          </Row>
          {!item.closingTime && (
            <Row mb="16px">
              <Timer
                text="Времени на этап:"
                finishTime={item.expectedCompletionTime}
                mr="16px"
              />

              {tab === "Observing" && <User perpetrator={item.perpetrator} />}
            </Row>
          )}
          <Row>
            <Device device={item.device} mr="16px" />
            <Address address={item.address} mr="auto" />
            <TimeCreate time={item.creationTime} mr="16px" />
            <Number number={item.number} />
          </Row>
        </ListEl>
      ))}
    </Ul>
  )
}

const ListEl = styled(li)`
  cursor: pointer;
  display: block;

  .title {
    transition: color 0.3s ease-in-out;
  }

  &:hover .title {
    color: ${p => p.theme.color.primary};
  }
`
