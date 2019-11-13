import React, {useEffect} from "react"
import { Input } from "antd"
import styled from "styled-components"

import { Text as text } from "../../components"

export const GeneralInfo = ({ name, phoneNumber }) => {
  return (
    <>
      <Row className="top">
        <Text>Название компании</Text>
        <Input size="large" value={name} />
      </Row>
      <Row className="bottom">
        <div>
          <Text>Телефон</Text>
          <Input size="large" value={phoneNumber} />
        </div>
        <div>
          <Text>Часовой пояс</Text>
          <Input size="large" defaultValue="UTC+3" />
        </div>
      </Row>
    </>
  )
}

const Text = styled(text).attrs({
  size: "small",
  view: "second"
})`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`
const Row = styled.div`
  &.top {
    margin-bottom: 24px;
  }

  &.bottom {
    display: flex;
    & > div:last-of-type {
      flex-grow: 1;
      margin-left: 24px;
    }
  }
`
