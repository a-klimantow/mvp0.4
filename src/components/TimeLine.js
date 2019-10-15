import React from "react"
import { Progress } from "antd"
import styled from "styled-components"

import { Text as text } from "./Text"
import { useTimer } from "../hooks"
import { dateFormat } from "../services/dateFormat"

export const TimeLine = ({ finish, start }) => {
  const timer = useTimer(finish)
  // const startPoint =

  // console.log(((Date.now() - new Date(start).getTime()) / 1000) >> 0)

  const percent =
    ((Date.now() - new Date(start)) / (new Date(finish) - new Date(start))) *
    100

  const statusColor =
    percent > 90 ? "#ED3B45" : percent > 60 ? "#E2B104" : "#17B45A"

  return (
    <TimeLineWrap>
      <div className="line">
        <Progress
          showInfo={false}
          percent={percent}
          strokeColor={statusColor}
        />
      </div>
      <div className="datetime">
        <Text>{timer}</Text>
        <Text className="ml">(до {dateFormat(finish, "DD.MM.YY")})</Text>
      </div>
    </TimeLineWrap>
  )
}

const TimeLineWrap = styled.div`
  display: flex;
  .line {
    flex-grow: 1;
  }

  .datetime {
    margin-left: 8px;
  }
`
const Text = styled(text)`
  font-size: 12px;
  line-height: 20px;
  &.ml {
    margin-left: 4px;
  }
`
