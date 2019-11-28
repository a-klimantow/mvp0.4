import React, { useRef, useContext, useState, useEffect } from "react"
import styled from "styled-components"

import { Row, Button, Upload, Icon } from "components"
import { method } from "services/api"
import { CurrentTaskPageContext } from "context"
import { spin } from "styles"

export const UploadDocument = () => {
  const input = useRef()
  const { state, updateState } = useContext(CurrentTaskPageContext)
  const [uploadFile, setUploadFile] = useState(null)
  const [upload, setUpload] = useState(false)
  const [deleted, setDeleted] = useState(null)

  const { documentsIds, files } = state

  useEffect(() => {
    if (upload) {
      let file = new FormData()
      file.append("file", ...input.current.files)
      method.post("Documents/upload", file).then(data => {
        updateState({ files: [...files, ...data] })
        setUploadFile(null)
        setUpload(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload])

  useEffect(() => {
    if (deleted) {
      method.delete(`Documents/${deleted}`).then(() => {
        updateState({ files: files.filter(file => file.id !== deleted) })
        setDeleted(null)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted])

  const del = (e, id) => {
    if (deleted) {
      e.preventDefault()
      return
    }
    setDeleted(id)
  }

  const hangleChange = () => {
    if (input.current.files.length) {
      console.log(input.current.files)
      setUploadFile(input.current.files[0])
      setUpload(true)
    }
  }

  const push = () => {
    const ids = files.map(item => item.id)
    updateState({ postData: { documentsIds: ids } })
  }

  return (
    <Row grid="auto 1fr auto">
      <Upload size="big" ref={input} onChange={hangleChange} />
      <RowFile>
        {!!files &&
          files.map(file => (
            <File key={file.id} spin={deleted}>
              <a
                href={file.url}
                target="_blank"
                rel="noreferrer noopener"
                onClick={e => deleted && e.preventDefault()}
              >
                {file.name}
              </a>
              <Icon type="del" onClick={e => del(e, file.id)} />
            </File>
          ))}
        {uploadFile && (
          <FileUpload>
            {uploadFile.name} <Icon type="del" />
          </FileUpload>
        )}
      </RowFile>
      <Button size="big" view="primary" disabled={!files.length} onClick={push}>
        Завершить этап
      </Button>
    </Row>
  )
}

const RowFile = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 12px;
  }
`

const File = styled.span`
  svg {
    ${p => p.spin && spin};
    margin-left: 8px;
    cursor: pointer;
    :hover {
      fill: ${p => p.theme.colors.error};
    }
  }
`

const FileUpload = styled.span`
  svg {
    margin-left: 8px;
    ${spin};
  }
`
