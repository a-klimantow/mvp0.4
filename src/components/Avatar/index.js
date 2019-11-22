import React from "react"
import styled from "styled-components"

import { Icon } from "components"

export const Avatar = () => {
  return (
    <AvatarWrap>
      <Icon type="username" />
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.bg};
`
