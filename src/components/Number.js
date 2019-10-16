import React from 'react'
import styled from 'styled-components'

import { Icon as icon } from './Icon'
import { Text as text } from './Text'
import { addMargin } from './styles'

export const Number = ({ number }) => (
  <NumberWrap>
    <Icon type="number" />
    <Text>{number}</Text>
  </NumberWrap>
)

const NumberWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.secondary};
`

const Text = styled(text).attrs(p => ({
  size: 'small',
  view: 'second'
}))``

const Icon = styled(icon)`
  margin-right: 2px;
  transform: translateY(3px);
`
