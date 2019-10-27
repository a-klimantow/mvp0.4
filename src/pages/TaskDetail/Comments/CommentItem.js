import React, { useState, useContext } from "react"
import { Button, Input, Popconfirm } from "antd"
import styled from "styled-components"

import { Text, Icon } from "../../../components"
import { dateFormat } from "../../../services/dateFormat"
import { TaskDetailContext } from "../store"
//
import { Avatar } from "../../../components"

const { TextArea } = Input

export const CommentItem = ({ id, text, author, createdAt, canBeEdited }) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState("")
  const { saveEditComment, deleteComment } = useContext(TaskDetailContext)

  const startEdit = () => {
    setEdit(true)
    setValue(text)
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  const save = () => {
    setEdit(false)
    saveEditComment(id, value)
  }

  const del = () => {
    deleteComment(id)
  }

  return (
    <CommentItemWrap>
      <Avatar />
      <div className="comment">
        <div className="top-row">
          <Text size="small" view="second">
            {author}
          </Text>
          <Text className="datetime" size="small">
            {dateFormat(createdAt, "DD.MM.YY HH:mm:ss")}
          </Text>
        </div>
        {!edit ? (
          <>
            <Text>{text}</Text>
          </>
        ) : (
          <>
            <TextArea
              autosize
              style={{ marginBottom: 8 }}
              value={value}
              onChange={handleChange}
            />
            <Button type="primary" onClick={save}>
              Сохранить
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => setEdit(false)}>
              Отмена
            </Button>
          </>
        )}
      </div>
      <BtnGroup className="btn-group">
        {canBeEdited && (
          <>
            <button onClick={startEdit}>
              <Icon type="edit" />
            </button>
            <Popconfirm
              title="Вы действительно хотите удалить комментарий?"
              okText="Да"
              cancelText="Нет"
              onConfirm={del}
            >
              <button className="del">
                <Icon type="del" />
              </button>
            </Popconfirm>
          </>
        )}
      </BtnGroup>
    </CommentItemWrap>
  )
}

const CommentItemWrap = styled.li`
  position: relative;
  padding-left: 44px;
  display: flex;
  margin-bottom: 24px;
  .comment {
    width: 100%;
  }

  .top-row {
    margin-bottom: 4px;
    flex-grow: 1;
  }

  .datetime {
    color: red;
    margin-left: 8px;
    color: ${p => p.theme.text.color.disable};
  }
`

const BtnGroup = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 22px;
  padding-left: 8px;
  width: 60px;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    padding: 1px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    margin: 4px;
    cursor: pointer;
    transition: color 0.5s;

    &:hover,
    &:focus,
    &:active {
      color: ${p => p.theme.color.primary};
      &.del {
        color: ${p => p.theme.color.error};
      }
    }
  }
`
