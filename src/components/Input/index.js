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
        <InputWrap type={isPass ? "password" : "text"} {...props} />
        <Icon type={isPass ? "view_off" : "view_on"} onClick={toggle} />
      </PassWrap>
    )
  }
  return <InputWrap type={type} {...props} />
}

const InputWrap = styled.input`
  ${size}
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  :not(:disabled):hover,
  :focus {
    border-color: ${p => p.theme.colors.primary};
  }
  :focus {
    box-shadow: 0 0 0 2px ${p => p.theme.colors.secondary};
  }
`
const PassWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    cursor: pointer;
    :hover {
      color: ${p => p.theme.colors.primary};
    }
  }
`
