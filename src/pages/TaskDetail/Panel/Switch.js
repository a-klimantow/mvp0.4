import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Button } from "antd"

import { Row as row, Select, Text as text } from "../../../components"
import { TaskDetailContext } from "../store"
import { useAxios, useEffectOnce } from "../../../hooks"

export const Switch = () => {
  const { get } = useAxios()
  const [stages, setStages] = useState([])
  const [nextStageId, setNextStageId] = useState(null)
  const {
    state: { id },

    pushStage
  } = useContext(TaskDetailContext)

  useEffectOnce(() => {
    get(`Tasks/${id}/NextStages`).then(data => {
      const stagesList = data.map(item => ({
        key: item.id,
        label: item.name
      }))
      setStages(stagesList)
    })
  })

  const handlePushStage = () => {
    const data = { nextStageId }
    pushStage(data)
  }

  return (
    <>
      <Row>
        <div className="select">
          <Text>Выбирите дальнейшее действие:</Text>
          <Select
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={stages}
            placeholder="Выбирите дальнейшее действие"
            onChange={e => setNextStageId(e.key)}
          />
        </div>
        <Button
          size="large"
          type="primary"
          onClick={handlePushStage}
          // loading={nextStageId}
          disabled={!nextStageId}
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
  .select {
    padding-right: 8px;
    flex-grow: 1;
  }
`
