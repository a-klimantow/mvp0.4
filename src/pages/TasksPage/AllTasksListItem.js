import React from "react"
import styled from "styled-components"
import { Row, ClousingTime, TimeLine } from "components"
import { hover } from "styles"
import { useTextWithIcon } from "hooks"

const color = "caption"
const titleProps = { weight: 600, as: "h4", "data-hover": true }

export const AllTasksListItem = ({
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
  onClick
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
      <ListItemWrap onClick={onClick}>
        <ClousingTime data={closingTime} />
        {Title}
        <Row grid="auto 1fr 1fr auto">
          {Device}
          {Address}
          {CreationTime}
          {TaskNumber}
        </Row>
      </ListItemWrap>
    )

  return (
    <ListItemWrap onClick={onClick}>
      {isResponsible && (
        <TimeLine time={{ expectedCompletionTime, creationTime }} />
      )}
      {Title}
      <Row grid="auto 1fr">
        {Timer}
        {!!~window.location.search.search(/Observing/) && User}
      </Row>
      <Row grid="auto 1fr 1fr auto">
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
  display: grid;
  grid-row-gap: ${p => p.theme.spaces[2]}px;
  span {
    font-size: 12px;
  }
  div:last-of-type {
    *:nth-child(3) {
      justify-self: end;
    }
  }
`
