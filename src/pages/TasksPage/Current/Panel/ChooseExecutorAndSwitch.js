import React from "react"
import styled from "styled-components"

import { Input, Label, Button, Row as row } from "components"

export const ChooseExecutorAndSwitch = () => {
  return (
    <>
      <Row mb="16px">
        <div>
          <Label label="Исполнитель">
            <Input size="big" />
          </Label>
        </div>
        <div className="ml">
          <Label label="Исполнитель">
            <Input size="big" />
          </Label>
        </div>
        <Button size="big">button</Button>
      </Row>
    </>
  )
}

const Row = styled(row)`
  align-items: flex-end;
  > div {
    flex-grow: 1;
  }
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`
