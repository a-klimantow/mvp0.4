import React, { useContext } from 'react'
import { Spin, Input } from 'antd'
import { useLocation } from 'react-router-dom'

import { Text } from '../../../components'
import { TaskDetailContext } from '../store'
import { ChooseExecutor } from './ChooseExecutor'
import { ChooseExecutorAndNotify } from './ChooseExecutorAndNotify'
import { ChooseExecutorAndAction } from './ChooseExecutorAndAction'
import { UploadDocument } from './UploadDocument'
import { Completion } from './Completion'

export const Panel = () => {
  const {
    state: { userOperatingStatus, currentStage }
  } = useContext(TaskDetailContext)

  const {
    state: { isResponsible, isArchived }
  } = useLocation()

  if (isArchived) return null

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
      <>
        {currentStage.action === undefined && <Spin />}
        {currentStage.action === 'ChooseExecutor' && <ChooseExecutor />}
        {currentStage.action === 'ChooseExecutorAndNotify' && (
          <ChooseExecutorAndNotify />
        )}
        {currentStage.action === 'ChooseExecutorAndAction' && (
          <ChooseExecutorAndAction />
        )}
        {currentStage.action === 'UploadDocument' && <UploadDocument />}
        {currentStage.action === 'Completion' && <Completion />}
      </>
    )
  }

  return (
    <div className="panel">
      <UploadDocument />
    </div>
  )
}
