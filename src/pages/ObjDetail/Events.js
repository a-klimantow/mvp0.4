import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams, useHistory } from "react-router-dom"

import {
  Title,
  Paper,
  Ul,
  Text,
  Timer,
  TimeCreate,
  Number,
  Device
} from "../../components"
import { useAxios } from "../../hooks"

export const Events = ({ arrData }) => {
  const { get } = useAxios()
  const { id } = useParams()
  const { push } = useHistory()
  const [events, setEvents] = useState(null)

  useEffect(() => {
    get(`Tasks?Take=3&HouseStokId=${id}`).then(data => {
      console.log(data.items)
      setEvents(data.items)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Paper>
      <Title level={3} mb="16px">
        События с объектом
      </Title>
      <Ul>
        {events &&
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
          ))}
      </Ul>
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
