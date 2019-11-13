import React, { useState } from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router-dom"

import { Row as row, Select, Text as text } from "../../../components"
import { useAxios, useEffectOnce } from "../../../hooks"
import { PushStateButton } from "./PushStageButton"

export const Switch = () => {
  const { get } = useAxios()
  const { url } = useRouteMatch()
  const [steps, setSteps] = useState([])
  const [nextStageId, setNextStageId] = useState(null)

  useEffectOnce(() => {
    get(`${url}/NextStages`).then(data => {
      const stagesList = data.map(item => ({
        key: item.id,
        label: item.name
      }))
      setSteps(stagesList)
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
        <PushStateButton disabled={!nextStageId} data={{ nextStageId }} />
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
    padding-right: 16px;
    flex-grow: 1;
  }
`
