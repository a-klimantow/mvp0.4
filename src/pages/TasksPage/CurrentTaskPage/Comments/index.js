import React, { useState, useRef, useEffect } from "react"

import { getFormattedDate } from "services/date"
import {
  Paper,
  Title,
  Row,
  Button,
  Avatar,
  TextArea,
  Block,
  Icon,
  Text
} from "components"

export const Comments = ({
  comments = [],
  create = () => {},
  edit = () => {},
  addLoading = false,
  editLoading = false
}) => {
  const textarea = useRef()

  const createComment = () => {
    create(textarea.current.value)
    textarea.current.value = ""
  }

  console.log(comments)
  return (
    <Paper>
      <Block gap={16}>
        <Title as="h3">
          Комментарии {!!comments.length && `(${comments.length})`}
        </Title>
        <Block as="ul" gap="12">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              {...comment}
              pushEdit={edit}
              loading={editLoading}
            />
          ))}
        </Block>
        <Row grid="auto 1fr">
          <Avatar />
          <Block child={2} justify="start">
            <TextArea
              size="big"
              ref={textarea}
              placeholder={addLoading ? "Идет загрузка" : null}
            />
            <Button onClick={createComment} loading={addLoading}>
              Добавить комментарий
            </Button>
          </Block>
        </Row>
      </Block>
    </Paper>
  )
}

const Comment = ({
  id,
  text,
  author,
  createdAt,
  canBeEdited,
  pushEdit,
  loading
}) => {
  const [edit, setEdit] = useState(null)
  const ref = useRef()
  const save = () => {
    pushEdit(ref.current.value, id)
    setEdit(false)
  }

  return (
    <Row as="li" grid="auto 1fr auto">
      <Avatar />
      <Block gap={8}>
        <Row grid="auto 1fr">
          <Text size="small" color="caption">
            {author}
          </Text>
          <Text size="small" color="disabled">
            {getFormattedDate({ value: createdAt, format: "with_time" })}
          </Text>
        </Row>
        {edit ? (
          <>
            <TextArea defaultValue={edit} ref={ref} />
            <Row grid="auto 1fr" justify="start" gapCol={8}>
              <Button size="small" onClick={() => setEdit(null)}>
                Отмена
              </Button>
              <Button
                size="small"
                view="primary"
                onClick={save}
                loading={loading}
              >
                Сохранить
              </Button>
            </Row>
          </>
        ) : (
          <Text>{text}</Text>
        )}
      </Block>
      {canBeEdited && (
        <Row grid="auto auto" gapCol={8} align="center">
          {!loading ? (
            <Icon type="edit" onClick={() => setEdit(text)} hover="primary" />
          ) : (
            "loadign"
          )}
          <Icon type="del" hover="error" />
        </Row>
      )}
    </Row>
  )
}
