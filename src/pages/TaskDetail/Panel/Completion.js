import React, { useContext } from 'react'
import { Button } from 'antd'

import { TaskDetailContext } from '../store'

export const Completion = () => {
  const { pushStage } = useContext(TaskDetailContext)
  return (
    <Button type="primary" size="large" onClick={pushStage}>
      Завершить этап
    </Button>
  )
}
