import React from "react"
import styled from "styled-components"

import { Input, Label, Button, Row as row, Block } from "components"

export const ChooseExecutorAndNotify = () => {
  return (
    <Block mb="24px">
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
      </Row>
      <Row>
        <div>
          <Label label="Текст пригласительного письма">
            <Input size="big" />
          </Label>
        </div>
        <Button ml="8px" size="big">
          Выбрать из шаблона
        </Button>
        <Button ml="16px" size="big" view="primary">
          Завершить этап
        </Button>
      </Row>
    </Block>
  )
}

const Row = styled(row)`
  align-items: flex-end;
  div:first-of-type,
  div:last-of-type {
    flex-grow: 1;
  }
  div.ml {
    margin-left: 24px;
  }
`
