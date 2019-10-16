import React from 'react'
import { Statistic } from 'antd'
// import styled from "styled-components"
//
// import { Text as text, Icon as icon } from "../components"

const { Countdown } = Statistic

export const useTimer = (dateValue, { text } = {}) => {
  // const [finish, setFinish] = React.useState(false)

  const deadline = new Date(dateValue).getTime()
  const time = ((deadline - Date.now()) / 1000) >> 0
  const day = 24 * 60 * 60
  const hour = 60 * 60
  let format = 'DDд HHч'

  if (time < 0) {
    format = 'время вышло'
  } else if (time < hour) {
    format = 'mmм ssс'
  } else if (time < day) {
    format = 'HHч mmм'
  }

  return (
    <Countdown
      valueStyle={{ fontSize: 12, color: 'rgba(39, 47, 90, 0.65)' }}
      format={format}
      value={dateValue}
      // onFinish={() => setFinish(true)}
    />
  )
}

// const Text = styled(text)`
//   font-size: 12px;
//   line-height: 20px;
//   display: flex;
//   align-items: baseline;
//   opacity: 1;
//   color: ${p => p.finishColor};
//   .text {
//     margin-right: 4px;
//   }
// `
// const Icon = styled(icon)`
//   transform: translateY(2.6px);
//   margin-right: 2px;
// `
