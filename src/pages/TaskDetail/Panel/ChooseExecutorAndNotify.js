import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"

import { TaskDetailContext } from "../store"
import { useAxios, useEffectOnce } from "../../../hooks"
import { Text as text, Select, Row as row } from "../../../components"

export const ChooseExecutorAndNotify = () => {
  const { get } = useAxios()
  const [employees, setEmployees] = useState([])
  const {
    state: { btnLoading, NextPerpetratorId },
    dispatch,
    pushStage
  } = useContext(TaskDetailContext)

  useEffectOnce(() => {
    get("ManagingFirmUsers").then(data => {
      const emloyeesList = data.map(item => ({
        key: item.id,
        label: item.name
      }))
      setEmployees(emloyeesList)
    })
  })

  const handlePushStage = () => {
    const data = { NextPerpetratorId: +NextPerpetratorId }
    pushStage(data)
  }

  return (
    <>
      <Row mb="16px">
        <div className="select">
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
        </div>
        <div className="input">
          <Text>Получатель пригласительного письма</Text>
          <Input size="large" />
        </div>
      </Row>
      <Row>
        <div className="textarea">
          <Text>Текст пригласительного письма</Text>
          <Input size="large" />
        </div>

        <Button size="large" style={{ marginRight: 16 }}>
          Выбрать из списка
        </Button>

        <Button
          size="large"
          type="primary"
          onClick={handlePushStage}
          loading={btnLoading}
          disabled={!NextPerpetratorId}
        >
          Завершить этап
        </Button>
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
const Row = styled(row)`
  align-items: flex-end;

  & > div {
    width: 50%;
  }

  .select {
    padding-right: 8px;
  }

  .input {
    padding-left: 8px;
  }

  .textarea {
    flex-grow: 1;
    padding-right: 16px;
  }
`
