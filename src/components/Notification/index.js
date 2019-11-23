/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

export const Notification = ({ error }) => {
  console.log(error)
  const [show, setShow] = useState(!!error)


  return (
    <Message show={show} onClick={() => setShow(false)}>
      hello
    </Message>
  )
}

const Message = styled.div`
  position: fixed;
  top: 0;
  right: 0%;
  border: 1px solid red;
  margin: 20px;
  transition: transform 1s;
  transform: ${p => (!p.show ? "translateX(200%)" : "translateX(0%)")};
`
