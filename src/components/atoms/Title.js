import React from "react"
import styled, { css } from "styled-components"
import { addTextStyle, addMargin } from "../styles"
import PropTypes from "prop-types"

const lv2 = css`
  font-size: 24px;
  line-height: 32px;
`

const lv3 = css`
  font-size: 20px;
  line-height: 28px;
`

const lv4 = css`
  font-size: 16px;
  line-height: 24px;
`

const TitleEl = styled.h1`
  ${addTextStyle};
  ${addMargin};

  font-size: 30px;
  line-height: 38px;

  ${p => p.level === 2 && lv2};
  ${p => p.level === 3 && lv3};
  ${p => p.level === 4 && lv4};
`

export const Title = props => (
  <TitleEl as={props.level && `h${props.level}`} {...props} />
)

Title.propTypes = {
  level: PropTypes.oneOf([2, 3, 4]),
  weight: PropTypes.oneOf([300, 600])
}
