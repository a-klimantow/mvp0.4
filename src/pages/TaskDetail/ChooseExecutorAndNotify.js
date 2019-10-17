import React, { useContext } from "react"
import styled from "styled-components"
import { Input, Row, Col, Button } from "antd"

import { TaskDetailContext } from "./store"

import { Text as text, Select } from "../../components"

export const ChooseExecutorAndNotify = () => {
  const {
    state: { employees },
    dispatch,
    pushStage
  } = useContext(TaskDetailContext)

  return (
    <>
      <Row gutter={24} style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Text>Исполнитель:</Text>
          <Select
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={employees}
            placeholder="Выбирите исполнителя"
            onChange={e =>
              dispatch({ type: "SET_NEXT_PERPETRATOR_ID", payload: e.key })
            }
          />
        </Col>
        <Col span={12}>
          <Text>Получатель пригласительного письма</Text>
          <Input size="large" />
        </Col>
      </Row>
      <Row gutter={16} type="flex" align="bottom">
        <Col span={16}>
          <Text>Текст пригласительного письма</Text>
          <Input size="large" />
        </Col>
        <Col span={4}>
          <Button size="large" block>
            Выбрать из списка
          </Button>
        </Col>
        <Col span={4}>
          <Button size="large" block type="primary" onClick={pushStage}>
            Завершить этап
          </Button>
        </Col>
      </Row>
    </>
  )
}

const Text = styled(text).attrs(p => ({
  size: "small",
  view: "second"
}))`
  margin-bottom: 8px;
`
