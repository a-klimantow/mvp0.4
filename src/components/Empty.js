import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
//
import { Icon as icon } from "./Icon"
import { Text } from "./Text"

export const Empty = ({ text }) => {
  return (
    <EmptyWrap>
      <div className="icon-wrap">
        <Icon />
      </div>
      <Text size="small" view="second">
        {text}
      </Text>
    </EmptyWrap>
  )
}

const EmptyWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .icon-wrap {
    display: inherit;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f3f5f6;
    margin-right: 8px;
  }
`

const Icon = styled(icon).attrs({
  viewBox: "0 0 21 21",
  type: "moon"
})`
  width: 21px;
  height: 21px;
  fill: ${p => p.theme.text.color.secondary};
`
Empty.propType = {
  text: PropTypes.string.isRequired
}
