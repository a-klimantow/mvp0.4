import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"
import { TaskDetailContext } from "../store"

const { TextArea } = Input

export const Editor = () => {
  const [value, setValue] = useState("")
  const {
    state: { btnLoading },
    addComment
  } = useContext(TaskDetailContext)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const addValueComment = () => {
    if (value.trim()) {
      addComment(value)
      setValue("")
    }
  }

  return (
    <EditorWrap>
      <Avatar />
      <div>
        <div className="textarea">
          <TextArea
            autosize
            value={value}
            onChange={handleChange}
            disabled={btnLoading}
          />
        </div>
        <Button type="primary" onClick={addValueComment} loading={btnLoading}>
          Добавить комментарий
        </Button>
      </div>
    </EditorWrap>
  )
}

const EditorWrap = styled.div`
  position: relative;
  padding-left: 44px;
  .textarea {
    margin-bottom: 8px;
  }
`
const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ccc;
`
