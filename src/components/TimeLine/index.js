import React from "react"
import styled from "styled-components"

import { getFormattedDate } from "services/date"

const setBgColor = timeline =>
  timeline < 60 ? "success" : timeline < 80 ? "warning" : "error"

export const TimeLine = ({ start, finish, ...props }) => {
  const startDate = new Date(start)
  const finishDate = new Date(finish)

  let percent = ((Date.now() - startDate) / (finishDate - startDate)) * 100
  if (percent >= 100) percent = 100

  const deadline = Date.now() > new Date(finish)

  return (
    <TimeLineWrap data-element-row timeline={percent} {...props}>
      <div className="line"></div>
      <span data-element-text data-size="small">
        {deadline ? "Время вышло" : `timer (до ${getFormattedDate(finish)})`}
      </span>
    </TimeLineWrap>
  )
}

const TimeLineWrap = styled.div`
  > .line {
    flex-grow: 1;
    height: 6px;
    border-radius: 8px;
    background-color: rgba(39, 47, 90, 0.04);
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      display: block;
      width: ${p => p.timeline || 0}%;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: inherit;
      background-color: ${p => p.theme.colors[setBgColor(p.timeline)]};
    }
  }

  > span {
    margin-left: 8px;
  }
`
