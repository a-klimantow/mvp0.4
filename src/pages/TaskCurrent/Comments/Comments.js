import React, { useContext } from "react"
import styled from "styled-components"

import { Paper as paper, Title, Ul } from "../../../components"
import { CommentEmpty } from "./CommentEmpty"
import { CommentItem } from "./CommentItem"
import { Editor } from "./Editor"
import { Context } from "../context"

export const Comments = () => {
  const { state } = useContext(Context)
  const { comments = [], userOperatingStatus, closingTime } = state

  if (closingTime && comments.length === 0) return null

  return (
    <Paper>
      <Title level={3} mb="16px">
        {comments.length === 0
          ? "Комментарии"
          : `Комментарии (${comments.length})`}
      </Title>
      <Ul>
        {comments.length === 0 && (
          <CommentEmpty text="Комментарии еще не добавлены" />
        )}
        {comments.map(comment => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </Ul>
      {userOperatingStatus === "Executor" && <Editor />}
    </Paper>
  )
}

const Paper = styled(paper)`
  margin-bottom: 24px;
  padding-bottom: 0;
`
