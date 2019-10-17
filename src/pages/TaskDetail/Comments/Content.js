import React, { useContext } from "react"
import { Input, Button, Popconfirm } from "antd"
import styled from "styled-components"

import { CommentContext } from "./Commnets"
import { Icon, Text } from "../../../components"

const { TextArea } = Input

export const Content = ({ value, id, editor }) => {
  const { state, dispatch } = useContext(CommentContext)

  if (true) {
    return !editor ? (
      <RowEditBtn>
        <>
          <Text>{value}</Text>
          <div className="btn-group">
            <button
              onClick={() => dispatch({ type: "EDIT_START", payload: id })}
            >
              <Icon type="edit" />
            </button>
            <Popconfirm
              title="Вы действительно хотите удалить комментарий?"
              okText="Да"
              cancelText="Нет"
              onConfirm={() =>
                dispatch({ type: "DELETE_COMMENT", payload: id })
              }
            >
              <button className="del">
                <Icon type="del" />
              </button>
            </Popconfirm>
          </div>
        </>
      </RowEditBtn>
    ) : (
      <RowTextArea>
        <div className="textarea">
          <TextArea
            autosize
            value={state.editValue}
            onChange={e =>
              dispatch({ type: "CHANGE_EDIT_VALUE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            style={{ marginRight: 8 }}
            type="primary"
            onClick={() =>
              dispatch({ type: "CONFIRM_EDIT_VALUE", payload: id })
            }
          >
            Сохраниить
          </Button>
          <Button onClick={() => dispatch({ type: "CANCEL_EDIT_VALUE" })}>
            Отмена
          </Button>
        </div>
      </RowTextArea>
    )
  }

  return <Text>{value}</Text>
}

const RowEditBtn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .btn-group {
    display: inherit;
    margin-left: 8px;
    button {
      border: none;
      background-color: transparent;
      padding: 1px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      margin: 2px;
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
  }
`

const RowTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  .textarea {
    width: 100%;
    margin-bottom: 8px;
  }
`
