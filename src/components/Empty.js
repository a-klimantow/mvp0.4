import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
//
import { Icon as icon } from "./Icon"
import { Text } from "./Text"

export const Empty = ({ text, center, h }) => {
  return !center ? (
    <EmptyWrap>
      <div className="icon-wrap">
        <Icon />
      </div>
      <Text size="small" view="second">
        {text}
      </Text>
    </EmptyWrap>
  ) : (
    <EmptyCenter h={h}>
      <IconCenter />
      <Text>{text || "Нет данных"}</Text>
    </EmptyCenter>
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
const EmptyCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  height: ${p => p.h || 100}px;

  ${Text} {
    color: ${p => p.theme.text.color.disable};
    margin-top: 8px;
  }
`

const IconCenter = styled(icon).attrs({
  type: "moon",
  viewBox: "0 0 21 21"
})`
  width: 32px;
  height: 32px;
  fill: ${p => p.theme.text.color.disable};
`

Empty.propType = {
  text: PropTypes.string.isRequired
}
