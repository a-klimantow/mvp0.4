import React from "react"
import { Spin } from "antd"
import styled from "styled-components"

export const Loader = ({ size, h }) => {
  return (
    <LoaderWrap h={h}>
      <Spin size={size} />
    </LoaderWrap>
  )
}

const LoaderWrap = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${p => p.h || 100}px;
`
