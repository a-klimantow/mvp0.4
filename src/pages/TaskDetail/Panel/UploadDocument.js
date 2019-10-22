import React, { useContext } from "react"
import { Button } from "antd"

import { Upload, Row } from "../../../components"
import { TaskDetailContext } from "../store"

export const UploadDocument = () => {
  const {
    state: { upload }
  } = useContext(TaskDetailContext)
  return (
    <Row>
      <Upload />
      <Button size="large" type="primary" disabled={upload.length === 0}>
        Завершить этап
      </Button>
    </Row>
  )
}
