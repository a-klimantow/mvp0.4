import React, { useContext, useState } from "react"
import styled from "styled-components"

import { Text as text, Select, Row as row } from "../../../components"
import { useEffectOnce, useAxios } from "../../../hooks"
import { Context } from "../context"
import { PushStateButton } from "./PushStageButton"

export const ChooseExecutorAndSwitch = () => {
  const { get } = useAxios()
  const { state, updateState } = useContext(Context)
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)
  const [steps, setSteps] = useState([])
  const [nextStageId, setNextStageId] = useState(null)


  useEffectOnce(() => {
    get("ManagingFirmUsers").then(data => {
      console.log(data)

      const emloyeesList = data.map(item => ({
        key: item.id,
        label: item.name,
        taskCount: item.executingTaskCount
      }))
      updateState({ employees: emloyeesList })
    })
  })

  return (
    <>
      <Row>
      <div className="select">
          <Text>Выбирите дальнейшее действие:</Text>
          <Select
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={steps}
            placeholder="Выбирите дальнейшее действие"
            onChange={e => setNextStageId(e.key)}
          />
        </div>
        <div className="select">
          <Text>Исполнитель</Text>
          <Select
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={state.employees}
            placeholder="Выбирите исполнителя"
            onChange={e => setNextPerpetratorId(e.key)}
          />
        </div>

        <PushStateButton
          data={{
            nextPerpetratorId
          }}
          disabled={!nextPerpetratorId}
        />
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
