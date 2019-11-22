import React, { useState } from "react"
import styled from "styled-components"

import { Paper, Title, Row, Input, Button, Avatar } from "components"

export const Comments = ({ comments = [], edit, create }) => {
  const [comment, setComment] = useState("")
  console.log(comments)
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
          <Input value={comment} onChange={e => setComment(e.target.value)} />
          <Button onClick={() => console.log("click")}>
            Добавить комментарий
          </Button>
        </div>
      </Editor>
    </Paper>
  )
}

const Editor = styled(Row)`
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
