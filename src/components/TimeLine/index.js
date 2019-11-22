import React from "react"
import styled from "styled-components"

export const TimeLine = ({ start, finish, ...props }) => {
  const startDate = new Date(start).getTime()
  const finishDate = new Date(finish).getTime()
  const currentDate = Date.now()

  const timeline = finishDate - startDate  

  return <TimeLineWrap timeline={10} {...props} />
}

const TimeLineWrap = styled.div`
  flex-grow: 1;
  height: 6px;
  border-radius: 8px;
  background-color: rgba(39, 47, 90, 0.04);
  position: relative;

  &::before {
    content: "";
    display: block;
    width: ${p => p.timeline || 0}%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: inherit;
    background-color: ${p =>
      p.timeline > 80
        ? p.theme.colors.error
        : p.timeline > 60
        ? p.theme.colors.warning
        : p.theme.colors.success};
  }
`
