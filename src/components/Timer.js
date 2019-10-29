import React from "react"
import styled from "styled-components"

import { useTimer } from "../hooks"
import { dateFormat } from "../services/dateFormat"
import { addMargin } from "./styles"
import { Icon as icon } from "./Icon"
import { Text as text } from "./Text"

export const Timer = ({ text, finishTime, ...props }) => {
  const timer = useTimer(finishTime)

  return (
    <TimerWrap {...props}>
      {text && (
        <>
          <Icon type="timer" />
          <Text className="text">{text}</Text>
        </>
      )}
      {timer}
      <Text className="time" view="second">
        (до {dateFormat(finishTime, "DD.MM.YY")})
      </Text>
    </TimerWrap>
  )
}

const TimerWrap = styled.div`
  ${addMargin};
  display: flex;
  flex-direction: row;
  color: ${p => p.theme.text.color.primary};
  align-items: center;
`

const Text = styled(text).attrs(p => ({
  size: "small"
}))`
  &.text {
    margin-right: 4px;
  }

  &.time {
    margin-left: 4px;
  }
`

const Icon = styled(icon)`
  margin-right: 6px;
`
