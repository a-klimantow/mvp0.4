import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Button } from "antd"

import {
  Title,
  Paper,
  Ul,
  Text,
  Timer,
  TimeCreate,
  Number,
  Device,
  Loader,
  Empty,
  TimeCompleted
} from "../../components"

export const Events = ({ events }) => {
  const { push } = useHistory()

  const num = events ? events.length > 2 : null
  return (
    <Paper>
      <Title level={3} mb="16px">
        События с объектом
      </Title>
      <Ul>
        {!events ? (
          <Loader size="large" />
        ) : events.length !== 0 ? (
          events.map(event => (
            <EventWrap
              key={event.id}
              onClick={() => push(`/tasks/${event.id}`, { ...event })}
            >
              <EventTitle>{event.name}</EventTitle>
              {event.closingTime ? (
                <TimeCompleted time={event.closingTime} />
              ) : (
                <Timer
                  text="Времени на этап:"
                  finishTime={event.expectedCompletionTime}
                />
              )}
              <div className="row">
                <TimeCreate time={event.creationTime} mr="16px" />
                <Number number={event.number} />
              </div>
              <Device device={event.device} />
            </EventWrap>
          ))
        ) : (
          <Empty center />
        )}
      </Ul>
      {num && (
        <Button block style={{ marginTop: 16 }} onClick={() => push("/")}>
          Все события
        </Button>
      )}
    </Paper>
  )
}

const EventTitle = styled(Text)`
  color: ${p => p.theme.title.color};
  font-weight: 600;
  margin-bottom: 4px;
  transition: color 0.3s;
`

const EventWrap = styled.li`
  padding: 24px 0;
  border-bottom: ${p => p.theme.border};
  cursor: pointer;
  .row {
    display: flex;
    margin: 16px 0 8px;
  }

  &:hover {
    ${EventTitle} {
      color: ${p => p.theme.color.primary};
    }
  }
`
