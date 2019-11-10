import React, { useState } from "react"

import { Upload, Row } from "../../../components"
import { PushStateButton } from "./PushStageButton"

export const UploadDocument = () => {
  const [documents, setDocuments] = useState([])

  const addDoc = arr => {
    setDocuments([...documents, ...arr])
  }

  const delDoc = id => {
    const arrDelele = documents.filter(i => i.id !== id)
    setDocuments(arrDelele)
  }

  return (
    <Row>
      <Upload addDoc={addDoc} delDoc={delDoc} />
      <PushStateButton
        disabled={documents.length === 0}
        data={{ documentsIds: documents.map(i => i.id) }}
      />
    </Row>
  )
}
