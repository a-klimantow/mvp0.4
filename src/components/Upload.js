import React, { useRef, useState, useContext } from "react"
import styled from "styled-components"
import { Spin } from "antd"

import { Text as text } from "./Text"
import { Icon as icon } from "./Icon"
import { useAxios } from "../hooks"

export const Upload = () => {
  const { post } = useAxios()
  const [files, setFiles] = useState([])
  const [uploadFiles, setUploadFiles] = useState([])
  const inputEl = useRef(null)

  const handleChange = () => {
    if (inputEl.current.files.length > 0) {
      let dataFile = new FormData()
      dataFile.append("file", inputEl.current.files[0])
      setFiles([...files, inputEl.current.files[0]])
      post('/Documents/upload', {files}).then(res => console.log(res))
    }
  }

  console.log()

  const deleteFile = id => {
    setFiles([])
    // deleteUploadFile(id)
  }

  return (
    <UploadWrap>
      <label className="label">
        <BtnUpload>Загрузить файл</BtnUpload>
        <input
          type="file"
          ref={inputEl}
          onChange={handleChange}
          // disabled={upload.length > 0}
        />
      </label>

      {uploadFiles.map(file => (
        <File key={file.id}>
          <Icon />
          <Text>{file.name}</Text>
          <IconDelete onClick={() => deleteFile(file.id)} />
        </File>
      ))}
      {files.map(file => (
        <File key={file.name}>
          <Icon />
          <Text>{file.name}</Text>
          <Spin size="small" />
        </File>
      ))}
    </UploadWrap>
  )
}

const UploadWrap = styled.div`
  /* flex-grow: ${p => p.grow}; */
  display: flex;
  align-items: center;
  flex-grow: 1;
  /* transition: flex-grow 1s ease-out; */

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`

const BtnUpload = styled.span`
  padding: 0 15px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: ${p => p.theme.radius};
  border: ${p => p.theme.border};
  font-size: 16px;
  background-color: #fff;
  transition: color 0.3s, border-color 0.3s;
  margin-right: 16px;

  &:hover {
    color: ${p => p.theme.color.primary};
    border-color: ${p => p.theme.color.primary};
  }
`
const Icon = styled(icon).attrs({
  type: "paperclip"
})`
  color: ${p => p.theme.text.color.primary};
`

const IconDelete = styled(icon).attrs({
  type: "close"
})`
  transform: translateY(0.5px);
  color: ${p => p.theme.text.color.primary};
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.color.error};
  }
`

const Text = styled(text)`
  color: ${p => p.theme.color.primary};
  margin-left: 6px;
  margin-right: 8px;
`

const File = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`
