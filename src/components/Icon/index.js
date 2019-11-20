import React from "react"
import styled from "styled-components"

import icons from './icons.json'

console.log(Object.keys(icons))
console.log(icons)

export const Icon = ({ type, ...props }) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d={icons[type]}/>
    </Svg>
  )
}

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`
