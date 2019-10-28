import React, { useReducer, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
// import styled from "styled-components"
import { Button } from "antd"
//
import {
  Grid,
  Block,
  Text,
  Paper,
  ListInfo,
  ListDevice,
  Ul,
  DocumentFile
} from "../../components"
import { Headers } from "./Headers"
import { Panel } from "./Panel"
import { Stages } from "./Stages"
import { Comments } from "./Comments"

import { initialState, reducer, TaskDetailContext } from "./store"
import { useAxios } from "../../hooks"

export const TaskDetail = () => {
  const { id } = useParams()
  const { get, post, put, deleteData } = useAxios()
  const { goBack, location } = useHistory()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    urlGET: `Task/${id}`
  })

  useEffect(() => {
    get(`Tasks/${id}`).then(res =>
      dispatch({ type: "ADD_STATE", payload: res })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.urlGET])

  const pushStage = data => {
    dispatch({
      type: "LOADING",
      payload: { btnLoading: true, currentStage: { action: undefined } }
    })
    dispatch({ type: "SET_NEXT_PERPETRATOR_ID", payload: null })
    post(`Tasks/${id}/PushStage`, data).then(res =>
      dispatch({ type: "PUSH_STAGE", payload: res })
    )
  }
  const revertStage = () => {
    dispatch({
      type: "LOADING",
      payload: { currentStage: { action: undefined } }
    })
    post(`Tasks/${id}/RevertStage`).then(res =>
      dispatch({ type: "PUSH_STAGE", payload: res })
    )
  }

  const showModal = () => {
    dispatch({ type: "SHOW_MODAL" })
  }

  const addComment = comment => {
    const data = JSON.stringify(comment)
    dispatch({
      type: "LOADING",
      payload: { btnLoading: true }
    })
    post(`Tasks/${id}/Comments`, data).then(comments =>
      dispatch({ type: "ADD_COMMENT", payload: comments })
    )
  }

  const saveEditComment = (commentId, comment) => {
    const data = JSON.stringify(comment)
    put(`Tasks/${id}/Comments/${commentId}`, data).then(comments => {
      dispatch({ type: "SAVE_EDIT_COMMENT", payload: comments })
    })
  }

  const deleteComment = commentId => {
    deleteData(`Tasks/${id}/Comments/${commentId}`).then(comments =>
      dispatch({ type: "DELETE_COMMENT", payload: comments })
    )
  }

  const uploadFile = data => {
    dispatch({ type: "LOADING", payload: { uploadLoading: true } })
    post(`Documents/upload`, data).then(res =>
      dispatch({ type: "ADD_UPLOAD_FILE", payload: res })
    )
  }

  const deleteUploadFile = docId => {
    dispatch({ type: "LOADING", payload: { uploadLoading: true } })
    deleteData(`Documents/${docId}`).then(() =>
      dispatch({ type: "DELETE_UPLOAD_FILE", payload: { id: docId } })
    )
  }
  return (
    <TaskDetailContext.Provider
      value={{
        state,
        dispatch,
        pushStage,
        revertStage,
        showModal,
        addComment,
        saveEditComment,
        deleteComment,
        uploadFile,
        deleteUploadFile
      }}
    >
      <>
        <Block m="16px 0 24px">
          <Button style={{ padding: "0 4px 0 0" }} type="link" onClick={goBack}>
            Задачи /
          </Button>
          <Text>
            {location.state.currentStageName
              ? location.state.currentStageName
              : location.state.name}
          </Text>
        </Block>
        <Headers currentStageName={state.currentStage.name}/>
        <Panel />

        {state.documents.length !== 0 && (
          <Block>
            <Ul mt="24px">
              {state.documents.map(document => (
                <DocumentFile key={document.id} {...document} />
              ))}
            </Ul>
          </Block>
        )}

        <Grid>
          <div>
            <Comments />
            <Paper>
              <ListInfo {...state} mb="24px" />
              <ListDevice {...state.device} />
            </Paper>
          </div>
          <Stages />
        </Grid>
      </>
    </TaskDetailContext.Provider>
  )
}

