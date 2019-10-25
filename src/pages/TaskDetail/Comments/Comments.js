import React, { useContext } from 'react'

import { Paper, Title, Ul } from '../../../components'
import { Editor } from './Editor'
import { CommentItem } from './CommentItem'
import { TaskDetailContext } from '../store'

export const Comments = () => {
  const {
    state: { comments, userOperatingStatus, closingTime }
  } = useContext(TaskDetailContext)



  return (
    <Paper className="comment">
      <Title level={3} mb="16px">
        {comments.length === 0
          ? 'Комментарии'
          : `Комментарии (${comments.length})`}
      </Title>
      <Ul>
        {comments.length === 0 ? <div>нет Комментарев</div> :
          comments.map((comment, i) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
      </Ul>
      {userOperatingStatus !== "Observer" || closingTime ? <Editor /> : null}
    </Paper>
  )
}
