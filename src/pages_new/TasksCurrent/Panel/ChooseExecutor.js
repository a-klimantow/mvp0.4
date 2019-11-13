import React, { useContext, useState } from "react"
import styled from "styled-components"

import { Text as text, Select, Row as row } from "../../../components"
import { useEffectOnce, useAxios } from "../../../hooks"
import { TasksCurrentContext } from "../context"
import { PushStateButton } from "./PushStageButton"

export const ChooseExecutor = () => {
  const { get } = useAxios()
  const { state, updateState } = useContext(TasksCurrentContext)
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)

  useEffectOnce(() => {
    get("ManagingFirmUsers").then(data => {
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
      <Row mb="16px">
        <div className="select">
          <Text>Исполнитель:</Text>
          <Select
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={state.employees}
            placeholder="Выберите исполнителя"
            onChange={e => setNextPerpetratorId(e.key)}
          />
        </div>
        <PushStateButton
          disabled={!nextPerpetratorId}
          data={{ nextPerpetratorId }}
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

  .select {
    padding-right: 8px;
    flex-grow: 1;
  }
`
