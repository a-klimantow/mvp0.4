import React, { useContext } from 'react'
import { Spin, Input } from 'antd'
import { useLocation } from 'react-router-dom'

import { Text } from '../../../components'
import { TaskDetailContext } from '../store'
import { ChooseExecutor } from './ChooseExecutor'
import { ChooseExecutorAndNotify } from './ChooseExecutorAndNotify'
import { ChooseExecutorAndAction } from './ChooseExecutorAndAction'
import { UploadDocument } from './UploadDocument'

export const Panel = () => {
  const {
    state: { currentStageAction, userOperatingStatus, currentStage }
  } = useContext(TaskDetailContext)

  const {
    state: { isResponsible }
  } = useLocation()

  if (isResponsible) {
    if (userOperatingStatus === 'Observer') {
      return (
        <div className="panel">
          <Text size="small" view="second" style={{ marginBottom: 8 }}>
            Исполнитель :
          </Text>
          <Input size="large" disabled value={currentStage.perpetrator} />
        </div>
      )
    }

    return (
      <div className="panel">
        {currentStageAction === null && <Spin />}
        {currentStageAction === 'ChooseExecutor' && <ChooseExecutor />}
        {currentStageAction === 'ChooseExecutorAndNotify' && (
          <ChooseExecutorAndNotify />
        )}
        {currentStageAction === 'ChooseExecutorAndAction' && (
          <ChooseExecutorAndAction />
        )}
        {currentStageAction === 'UploadDocument' && <UploadDocument />}
      </div>
    )
  }

  return (
    <div className="panel">
      <UploadDocument />
    </div>
  )
}
