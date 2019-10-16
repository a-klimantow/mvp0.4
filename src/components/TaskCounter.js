import React from 'react'
import styled from 'styled-components'

import { Icon as icon } from './Icon'
import { Text as text } from './Text'
import { addMargin } from './styles'

export const TaskCounter = ({ count = 0, ...props }) => {
  return (
    <TaskCounterWrap {...props}>
      <Icon type="union" />
      <Text view="second" className="title">
        Задач:
      </Text>
      {count}
    </TaskCounterWrap>
  )
}

const TaskCounterWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.primary};
`

const Text = styled(text).attrs(p => ({
  size: 'small'
}))`
  &.title {
    margin-right: 4px;
    margin-left: 5px;
  }
`

const Icon = styled(icon)`
  transform: translateY(5px);
  color: red;
`
