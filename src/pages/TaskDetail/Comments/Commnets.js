import React, { useContext } from "react"

import { Paper, Title, Ul } from "../../../components"
import { Editor } from "./Editor"
import { CommentItem } from "./CommentItem"
import { TaskDetailContext } from "../store"

export const Comments = () => {
  const {
    state: { comments = [] }
  } = useContext(TaskDetailContext)

  const lastComment = comments && comments.length - 1

  return (
    <Paper className="comment">
      <Title level={3} mb="16px">
        {!(comments.length > 0)
          ? "Комментарии"
          : `Комментарии (${comments.length})`}
      </Title>
      <Ul>
        {comments &&
          comments.map((comment, i) => (
            <CommentItem
              key={comment.id}
              {...comment}
              editPanel={i === lastComment}
            />
          ))}
      </Ul>
      <Editor />
    </Paper>
  )
}
