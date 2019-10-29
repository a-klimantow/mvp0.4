import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"
import { useRouteMatch } from "react-router-dom"

import { Text as text, Select, Row as row } from "../../../components"
import { useEffectOnce, useAxios } from "../../../hooks"
import { Context } from "../context"

export const ChooseExecutorAndNotify = () => {
  const { get, post } = useAxios()
  const { state, updateState } = useContext(Context)
  const { url } = useRouteMatch()
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)
  const [contractorsId, setContractorsId] = useState(null)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffectOnce(() => {
    if (!state.employees) {
      get("ManagingFirmUsers").then(data => {
        const emloyeesList = data.map(item => ({
          key: item.id,
          label: item.name
        }))
        updateState({ employees: emloyeesList })
      })
    }

    if (!state.contractors) {
      get("Contractors").then(data => {
        const contractorsList = data.map(item => ({
          key: item.id,
          label: item.name
        }))
        updateState({ contractors: contractorsList })
      })
    }
  })

  console.log(url)

  const pushStage = () => {
    setLoading(true)
    post(`${url}/PushStage`, {
      nextPerpetratorId,
      emailNotify: { contractorsId, message }
    })
      .then(updateState)
      .finally(() => setLoading(false))
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
            options={state.employees}
            placeholder="Выбирите исполнителя"
            onChange={e => setNextPerpetratorId(e.key)}
          />
        </div>
        <div className="input">
          <Text>Получатель пригласительного письма</Text>
          <Select
            mode="multiple"
            labelInValue
            style={{ display: "block" }}
            size="large"
            options={state.contractors}
            placeholder="Выбирите кому отправить пригласительное письмо"
            onChange={e => setContractorsId(e.map(i => i.key))}
          />
        </div>
      </Row>
      <Row>
        <div className="textarea">
          <Text>Текст пригласительного письма</Text>
          <Input
            size="large"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <Button size="large" style={{ marginRight: 16 }}>
          Выбрать из списка
        </Button>

        <Button
          size="large"
          type="primary"
          onClick={pushStage}
          loading={loading}
          disabled={!nextPerpetratorId}
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
