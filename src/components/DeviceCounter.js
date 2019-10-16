import React from 'react'
import styled from 'styled-components'

import { Icon as icon } from './Icon'
import { Text as text } from './Text'
import { addMargin } from './styles'

export const DeviceCounter = ({ ipu = 0, odpu = 0, ...props }) => {
  return (
    <DeviceCounterWrap {...props}>
      <Icon type="device" />
      <Text view="second" className="title">
        ОДПУ:
      </Text>
      <Text>{odpu}</Text>
      <Text view="second" className="title">
        ИПУ:
      </Text>
      <Text>{ipu}</Text>
    </DeviceCounterWrap>
  )
}

const DeviceCounterWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.primary};
`

const Text = styled(text).attrs(p => ({
  size: 'small'
}))`
  &.title {
    margin-right: 4px;
    margin-left: 8px;
  }
`

const Icon = styled(icon)`
  transform: translateY(4px);
`
