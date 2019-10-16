import React from 'react'
import { Progress } from 'antd'
import styled from 'styled-components'

import { Timer } from './Timer'

export const TimeLine = ({ finish, start }) => {
  const percent =
    ((Date.now() - new Date(start)) / (new Date(finish) - new Date(start))) *
    100

  const statusColor =
    percent > 90 ? '#ED3B45' : percent > 60 ? '#E2B104' : '#17B45A'

  return (
    <TimeLineWrap>
      <div className="line">
        <Progress
          showInfo={false}
          percent={percent}
          strokeColor={statusColor}
        />
      </div>
      <Timer finishTime={finish} ml="8px" />
    </TimeLineWrap>
  )
}

const TimeLineWrap = styled.div`
  display: flex;
  .line {
    flex-grow: 1;
  }
`
