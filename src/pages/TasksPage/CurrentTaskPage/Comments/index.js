import React, { useState, useRef } from "react"
import styled from "styled-components"

import { Paper, Title, Row, Input, Button, Avatar, TextArea } from "components"

export const Comments = ({ comments = [], edit, create }) => {
  const [comment, setComment] = useState("")
  const textarea = useRef()
  console.log(textarea.current)
  return (
    <Paper mb="24px">
      <Title as="h3">Комментарии</Title>
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} comment />
        ))}
      </ul>
      <Editor>
        <Avatar />
        <div className="input">
          <TextArea size="big" ref={textarea} />
          <Button onClick={() => (textarea.current.value = "")}>
            Добавить комментарий
          </Button>
        </div>
      </Editor>
    </Paper>
  )
}

const Editor = styled.div`
  align-items: flex-start;
  div.input {
    flex-grow: 1;
    margin-left: 16px;
    button {
      margin-top: 8px;
    }
  }
`
const Comment = () => {
  return <li>comment</li>
}
