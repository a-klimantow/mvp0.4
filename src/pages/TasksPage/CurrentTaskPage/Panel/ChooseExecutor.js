import React from "react"
import styled from "styled-components"

import { Input, Label, Button, Row as row, Block } from "components"

export const ChooseExecutor = () => {
  return (
    <Block mb="24px">
      <Row>
        <div>
          <Label label="Исполнитель">
            <Input size="big" />
          </Label>
        </div>
        <Button ml="16px" size="big" view="primary">
          Завершить этап
        </Button>
      </Row>
    </Block>
  )
}

const Row = styled(row)`
  align-items: flex-end;
  div:first-of-type {
    flex-grow: 1;
  }
`
