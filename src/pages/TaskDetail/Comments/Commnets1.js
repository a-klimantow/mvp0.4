import React, { useReducer, createContext, useEffect } from "react"
import { Comment, Avatar } from "antd"
import styled from "styled-components"

import { Paper, Title } from "../../../components"
import { Editor } from "./Editor"
import { CommentList } from "./CommentList"
import { reducer } from "./reducer"

export const CommentContext = createContext()

export const Comments = ({ comments }) => {
  // console.log(comments)

  const [state, dispatch] = useReducer(reducer, {
    comments: [],
    value: "",
    editValue: "",
    delete: "",
    submitting: false
  })

  useEffect(() => {
    dispatch({ type: "LOAD_COMMENT", payload: comments })
  }, [comments])

  const crateComment = e => {
    e.preventDefault()
    if (state.value.trim()) {
      dispatch({ type: "CREATE_COMMENT" })
    }
  }

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      <PaperComm>
        <Title level={3} mb="16px">
          Комментарии
        </Title>
        {state.comments && <CommentList comments={state.comments} />}
        <Comment
          avatar={<Avatar className="avatar" />}
          content={
            <Editor
              onChange={e =>
                dispatch({
                  type: "INPUT_COMMENT",
                  payload: e.target.value
                })
              }
              onSubmit={crateComment}
              submitting={state.submitting}
              value={state.value}
            />
          }
        />
      </PaperComm>
    </CommentContext.Provider>
  )
}

const PaperComm = styled(Paper)`
  padding: 24px 24px 8px;

  .ant-row.ant-form-item {
    margin-bottom: 8px;
  }

  div.ant-comment-inner {
    padding: 0;
    padding-bottom: 24px;
  }

  .avatar {
    margin-top: 10px;
  }
`
