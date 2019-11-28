import React, { useState } from "react"
import styled from "styled-components"

import { size } from "styles"
import { Icon } from "components"

export const Input = ({ type, ...props }) => {
  const [isPass, setIsPass] = useState(type === "password")
  const toggle = () => setIsPass(!isPass)

  if (type === "password") {
    return (
      <PassWrap>
        <InputWrap
          type={isPass ? "password" : "text"}
          isPass={true}
          {...props}
        />
        <Icon type={isPass ? "view_off" : "view_on"} onClick={toggle} />
      </PassWrap>
    )
  }
  return <InputWrap type={type} {...props} />
}

const InputWrap = styled.input.attrs(p => ({ "data-size": p.size }))`
  ${size}
  ${p => p.isPass && "padding-right: 30px"}
`

const PassWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    :hover {
      color: ${p => p.theme.colors.primary};
    }
  }
`
