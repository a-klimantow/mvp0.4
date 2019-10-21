import React from "react"
import { Upload, message, Button } from "antd"
import styled from "styled-components"

export const UploadDocument = () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <UploadWrap>
          <Upload {...props}>
            <Button size="large" style={{ marginRight: 8 }}>
              Загрузить акт
            </Button>
          </Upload>
        </UploadWrap>
        <Button size="large" type="primary" disabled style={{ marginLeft: 8 }}>
          Завершить этап
        </Button>
      </div>
    </>
  )
}

const UploadWrap = styled.div`
  flex-grow: 1;
  & > span {
    display: flex;
    width: 100%;
  }
  div.ant-upload-list-item.ant-upload-list-item-done {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
