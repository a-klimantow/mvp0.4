import React from "react"
import styled from "styled-components"

export const TimeLine = ({ start, finish, ...props }) => {
  const percent =
    ((Date.now() - new Date(start)) / (new Date(finish) - new Date(start))) *
    100
  return <TimeLineWrap timeline={percent} {...props} />
}

const TimeLineWrap = styled.div`
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
    background-color: ${p =>
      p.timeline > 80
        ? p.theme.colors.error
        : p.timeline > 60
        ? p.theme.colors.warning
        : p.theme.colors.success};
  }
`
