import React from "react"
import styled from "styled-components"
//
import { Icon } from "./Icon"

export const Avatar = () => {
  return (
    <AvatarWrap>
      <Icon type="user" />
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f5f6;
  position: absolute;
  top: 0;
  left: 0;
  color: ${p => p.theme.text.color.secondary};
`
