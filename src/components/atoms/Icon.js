import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
//
import icons from "../../assets/icons"

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
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string
}

// map for resurces
export const resourceIconMap = {
  HotWaterSupply: {
    type: "water",
    color: "#FF8C68"
  },
  ColdWaterSupply: {
    type: "water",
    color: "#79AFFF"
  },
  Heat: {
    type: "heat",
    color: "rgba(39, 47, 90, 0.45)"
  },
  Calculator: {
    type: "device"
  }
}
