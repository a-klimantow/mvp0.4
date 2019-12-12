import React, { useContext, useState } from "react"
import { useRouteMatch } from "react-router-dom"
import styled from "styled-components"
import { Input, Button } from "antd"
//
import { Avatar } from "../../../components"
import { TasksCurrentContext } from "../context"
import { useAxios } from "../../../hooks"

const { TextArea } = Input

export const Editor = () => {
  const { updateState } = useContext(TasksCurrentContext)
  const { post } = useAxios()
  const { url } = useRouteMatch()
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)

  const addValueComment = () => {
    if (value.trim()) {
      setLoading(true)
      post(`${url}/Comments`, JSON.stringify(value))
        .then(data => updateState({ comments: data.items }))
        .finally(() => setLoading(false))
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
            onChange={e => setValue(e.target.value)}
            disabled={loading}
          />
        </div>
        <Button type="primary" onClick={addValueComment} loading={loading}>
          Добавить комментарий
        </Button>
      </div>
    </EditorWrap>
  )
}

const EditorWrap = styled.div`
  position: relative;
  padding-left: 44px;
  margin-bottom: 24px;
  .textarea {
    margin-bottom: 8px;
  }
`
