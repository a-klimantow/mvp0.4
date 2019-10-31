import React, { useState } from "react"
import styled from "styled-components"
import { useParams, useHistory } from "react-router-dom"
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
  Empty
} from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"

export const Events = () => {
  const { get } = useAxios()
  const { id } = useParams()
  const { push } = useHistory()
  const [events, setEvents] = useState(null)

  useEffectOnce(() => {
    get(`Tasks?Take=3&HousingStockId=${id}`).then(data => {
      console.log(data)
      setEvents(data.items)
    })
  })

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
              onClick={() => push(`/Tasks/${event.id}`)}
            >
              <EventTitle>{event.name}</EventTitle>
              <Timer
                text="Времени на этап:"
                finishTime={event.expectedCompletionTime}
              />
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
      <Button block style={{ marginTop: 16 }} onClick={() => push("/")}>
        Все события
      </Button>
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
