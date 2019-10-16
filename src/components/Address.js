import React from 'react'
import styled from 'styled-components'

import { Icon as icon } from './Icon'
import { Text as text } from './Text'
import { addMargin } from './styles'

export const Address = ({ address, ...props }) => (
  <AddressWrap {...props}>
    <Icon type="map" />
    <Text>{address}</Text>
  </AddressWrap>
)

const AddressWrap = styled.div`
  ${addMargin}
  color: ${p => p.theme.text.color.primary};
`

const Icon = styled(icon)`
  margin-right: 6px;
  transform: translateY(4px);
`

const Text = styled(text).attrs(p => ({
  size: 'small'
}))``
