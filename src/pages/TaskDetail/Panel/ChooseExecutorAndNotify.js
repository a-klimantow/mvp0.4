import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"

import { TaskDetailContext } from "../store"
import { useAxios, useEffectOnce } from "../../../hooks"
import { Text as text, Select, Row as row } from "../../../components"

export const ChooseExecutorAndNotify = () => {
  const { get } = useAxios()
  const [employees, setEmployees] = useState([])
  const [contractors, setContractors] = useState([])
  const [NextPerpetratorId, setNextPerpetratorId] = useState(null)
  const [contractorsIds, setContractorsID] = useState([])
  const [message, setMessage] = useState('')
  const {
    state: { btnLoading},
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

    get("Contractors").then(data => {
      const contractorsList = data.map(item => ({
        key: item.id,
        label: item.name
      }))
      setContractors(contractorsList)
    })
  })

  const handlePushStage = () => {
    const data = { 
      NextPerpetratorId, 
      emailNotify : {
        contractorsIds, message
      } 
   }
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
            options={contractors}
            placeholder="Выбирите кому отправить пригласительное письмо"
            onChange={e => setContractorsID(e.map(i => i.key))}
          />
        </div>
      </Row>
      <Row>
        <div className="textarea">
          <Text>Текст пригласительного письма</Text>
          <Input size="large" value={message} onChange={e => setMessage(e.target.value)} />
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
