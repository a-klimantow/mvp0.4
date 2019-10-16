import React from 'react'
import styled from 'styled-components'

import { dateFormat } from '../services/dateFormat'
import { Icon as icon } from './Icon'
import { Text as text } from './Text'
import { addMargin } from './styles'

export const TimeCreate = ({ time, ...props }) => {
  return (
    <TimeCreateWrap {...props}>
      <Icon type="calendar" />
      <Text>{dateFormat(time, 'DD.MM.YYYY HH:mm')}</Text>
    </TimeCreateWrap>
  )
}

const TimeCreateWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.secondary};
`

const Text = styled(text).attrs(p => ({
  size: 'small',
  view: 'second'
}))``

const Icon = styled(icon)`
  margin-right: 8px;
  transform: translateY(3px);
`
