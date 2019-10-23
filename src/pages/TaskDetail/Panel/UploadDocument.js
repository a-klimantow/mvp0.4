import React, { useContext } from 'react'
import { Button } from 'antd'

import { Upload, Row } from '../../../components'
import { TaskDetailContext } from '../store'

export const UploadDocument = () => {
  const {
    state: { upload },
    pushStage
  } = useContext(TaskDetailContext)

  const handleClick = () => {
    const data = upload.map(file => file.id)
    const documentsIds = data
    pushStage({ documentsIds })
  }

  return (
    <Row>
      <Upload />
      <Button
        size="large"
        type="primary"
        disabled={upload.length === 0}
        onClick={handleClick}
      >
        Завершить этап
      </Button>
    </Row>
  )
}
