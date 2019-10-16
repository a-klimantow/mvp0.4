import React from 'react'
import styled from 'styled-components'

import { dateFormat } from '../services/dateFormat'
import { addMargin } from './styles'
import { Icon as icon } from './Icon'
import { Text } from './Text'

export const TimeCompleted = ({ time, ...props }) => {
  return (
    <TimeCompletedWrap {...props}>
      <Icon />
      <Text size="small">Выполненно за {dateFormat(time, 'DDд HHч')}</Text>
    </TimeCompletedWrap>
  )
}

const TimeCompletedWrap = styled.div`
  ${addMargin};
  display: flex;
  align-items: center;
`

const Icon = styled(icon).attrs(p => ({
  type: 'ok',
  color: '#17B45A'
}))`
  margin-right: 4px;
`
