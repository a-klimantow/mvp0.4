import React, { useState } from "react"
import { Button } from "antd"

import { Upload, Row } from "../../../components"

export const UploadDocument = ({ pushStage, loading }) => {
  const [documents, setDocuments] = useState([])

  const addDoc = arr => {
    setDocuments([...documents, ...arr])
  }

  const delDoc = id => {
    const arrDelele = documents.filter(i => i.id !== id)
    setDocuments(arrDelele)
  }

  const handleClick = () => {
    const documentsIds = documents.map(i => i.id)
    pushStage({ documentsIds })
  }

  return (
    <Row>
      <Upload addDoc={addDoc} delDoc={delDoc} />
      <Button
        size="large"
        type="primary"
        disabled={documents.length === 0}
        onClick={handleClick}
        loading={loading}
      >
        Завершить этап
      </Button>
    </Row>
  )
}
