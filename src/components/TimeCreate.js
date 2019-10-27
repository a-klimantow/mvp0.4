import React from "react"
import styled from "styled-components"

import { dateFormat } from "../services/dateFormat"
import { Icon as icon } from "./Icon"
import { Text as text } from "./Text"
import { addMargin } from "./styles"

export const TimeCreate = ({ time, text, fullTime = true, ...props }) => {
  const format = fullTime ? "DD.MM.YYYY HH:mm" : "DD.MM.YYYY"
  return (
    <TimeCreateWrap {...props}>
      <Icon type="calendar" />
      {text && <Text className="text">{text}</Text>}
      <Text>{dateFormat(time, format)}</Text>
    </TimeCreateWrap>
  )
}

const TimeCreateWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.secondary};
`

const Text = styled(text).attrs(p => ({
  size: "small",
  view: "second"
}))`
  &.text {
    margin-right: 4px;
  }
`

const Icon = styled(icon)`
  margin-right: 8px;
  transform: translateY(3px);
`
