import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import { Row, ClousingTime, TimeLine } from "components"
import { hover } from "styles"
import { useTextWithIcon } from "hooks"

export const AllTasksList = ({ items, loading }) => {
  const { push } = useHistory()
  if (!items || loading) return <>loading...</>

  return (
    <ul>
      {items.map(({ id, url, ...props }) => (
        <TasksListItem key={id} routeTo={() => push(url, props)} {...props} />
      ))}
    </ul>
  )
}

const color = "caption"

const titleProps = { weight: 600, as: "h4", "data-hover": true }

const TasksListItem = ({
  creationTime,
  closingTime,
  expectedCompletionTime,
  address,
  number,
  name,
  currentStageName,
  device = {},
  isResponsible,
  perpetrator = {},
  routeTo
}) => {
  const Title = useTextWithIcon({
    title: currentStageName || name,
    ...titleProps
  })
  const Address = useTextWithIcon({ text: address, icon: "map" })
  const TaskNumber = useTextWithIcon({
    text: number,
    icon: "number",
    color
  })
  const Device = useTextWithIcon({ device })
  const CreationTime = useTextWithIcon({
    icon: "calendar",
    date: { value: creationTime, format: "with_time" },
    color
  })
  const User = useTextWithIcon({
    icon: "username",
    text: !perpetrator || perpetrator.name
  })
  const Timer = useTextWithIcon({
    icon: "timer",
    date: { value: expectedCompletionTime },
    text: "timer"
  })

  if (closingTime)
    return (
      <ListItemWrap onClick={routeTo}>
        <ClousingTime data={closingTime} />
        {Title}
        <Row spaces={3} autoAt={2}>
          {Device}
          {Address}
          {CreationTime}
          {TaskNumber}
        </Row>
      </ListItemWrap>
    )

  return (
    <ListItemWrap onClick={routeTo}>
      {isResponsible && (
        <TimeLine time={{ expectedCompletionTime, creationTime }} />
      )}
      {Title}
      <Row spaces={3} className="mb_16">
        {Timer}
        {!!~window.location.search.search(/Observing/) && User}
      </Row>
      <Row spaces={3} autoAt={2}>
        {Device}
        {Address}
        {CreationTime}
        {TaskNumber}
      </Row>
    </ListItemWrap>
  )
}

const ListItemWrap = styled.li`
  ${hover}
  padding: 24px 0;
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.border};
  cursor: pointer;
  & > *:not(:last-child) {
    margin-bottom: ${p => p.theme.spaces[8]}px;
  }
  span {
    font-size: 12px;
  }
  span.closingTime {
    margin-bottom: 8px;
  }
  .mb_16 {
    margin-bottom: 16px;
  }
`
