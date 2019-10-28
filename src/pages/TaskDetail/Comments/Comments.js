import React, { useContext } from "react"
import styled from "styled-components"

import { Paper, Title, Ul } from "../../../components"
import { Editor } from "./Editor"
import { CommentItem } from "./CommentItem"
import { CommentEmpty } from "./CommentEmpty"
import { TaskDetailContext } from "../store"

export const Comments = () => {
  const {
    state: { comments, userOperatingStatus, closingTime }
  } = useContext(TaskDetailContext)

  return (
    <CommentBlock>
      <Title level={3} mb="16px">
        {comments.length === 0
          ? "Комментарии"
          : `Комментарии (${comments.length})`}
      </Title>
      <Ul>
        {comments.length === 0 ? (
          <CommentEmpty text="Комментарии еще не добавлены" />
        ) : (
          comments.map((comment, i) => (
            <CommentItem key={comment.id} {...comment} />
          ))
        )}
      </Ul>
      {userOperatingStatus === "Executor" || closingTime ? <Editor /> : null}
    </CommentBlock>
  )
}

const CommentBlock = styled(Paper)`
  margin-bottom: 24px;
`
