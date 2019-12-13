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
  Empty,
  Loader
} from "../../components"

export const Events = ({ events }) => {
  const { push } = useHistory()
  // console.log("ev", events)

  const num = events ? events.length > 2 : null

  return (
    <Paper>
      <Title level={3} mb="16px">
        События с прибором
      </Title>
      <Ul>
        {!events ? (
          <Loader size="large" />
        ) : events.lenght !== 0 ? (
          events.map(device => (
            <EventWrap
              key={device.id}
              onClick={() => push(`/Tasks/${device.id}`)}
            >
              <EventTitle>{device.name}</EventTitle>
              <Timer
                text="Времени на этап:"
                finishTime={device.expectedCompletionTime}
              />
              <div className="row">
                <TimeCreate time={device.creationTime} mr="16px" />
                <Number number={device.number} />
              </div>
              <Device device={device.device} />
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
