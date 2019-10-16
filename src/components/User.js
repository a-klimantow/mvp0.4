import React from 'react'
import styled from 'styled-components'

import { addMargin } from './styles'
import { Icon as icon } from './Icon'
import { Text } from './Text'

export const User = ({ perpetrator = null, ...props }) => (
  <UserWrap {...props}>
    <Icon type="user" />
    <Text size="small">{perpetrator}</Text>
  </UserWrap>
)

const UserWrap = styled.div`
  ${addMargin};
  color: ${p => p.theme.text.color.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Icon = styled(icon)`
  margin-right: 6px;
`
