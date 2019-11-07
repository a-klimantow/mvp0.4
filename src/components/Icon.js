import React from "react"
import styled from "styled-components"

import icons from "../assets/icons"

export const Icon = ({ type, ...props }) => (
  <SVG viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d={icons[type]} />
  </SVG>
)

const SVG = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${p => p.fill || "currentColor"};
  transform: translateY(-1px);
`
