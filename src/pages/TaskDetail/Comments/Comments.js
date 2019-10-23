import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Paper, Title, Ul } from '../../../components'
import { Editor } from './Editor'
import { CommentItem } from './CommentItem'
import { TaskDetailContext } from '../store'

export const Comments = () => {
  const {
    state: { comments }
  } = useContext(TaskDetailContext)

  const {
    state: { isArchived }
  } = useLocation()

  console.log(isArchived)

  return (
    <Paper className="comment">
      <Title level={3} mb="16px">
        {comments.length === 0
          ? 'Комментарии'
          : `Комментарии (${comments.length})`}
      </Title>
      <Ul>
        {comments &&
          comments.map((comment, i) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
      </Ul>
      {!isArchived && <Editor />}
    </Paper>
  )
}
