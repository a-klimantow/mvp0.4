import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

import { Row as row, Select, Text as text } from '../../../components'
import { TaskDetailContext } from '../store'
import { useAxios, useEffectOnce } from '../../../hooks'

export const ChooseExecutor = () => {
  const { get } = useAxios()
  const [employees, setEmployees] = useState([])
  const {
    state: { btnLoading, NextPerpetratorId },
    dispatch,
    pushStage
  } = useContext(TaskDetailContext)

  useEffectOnce(() => {
    get('ManagingFirmUsers').then(data => {
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
      <Row>
        <div className="select">
          <Text>Исполнитель:</Text>
          <Select
            labelInValue
            style={{ display: 'block' }}
            size="large"
            options={employees}
            placeholder="Выбирите исполнителя"
            onChange={e =>
              dispatch({ type: 'SET_NEXT_PERPETRATOR_ID', payload: e.key })
            }
          />
        </div>
        <Button
          size="large"
          type="primary"
          onClick={handlePushStage}
          // loading={btnLoading}
          disabled={!NextPerpetratorId}
        >
          Завершить этап
        </Button>
      </Row>
    </>
  )
}

const Text = styled(text).attrs(p => ({
  size: 'small',
  view: 'second'
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
