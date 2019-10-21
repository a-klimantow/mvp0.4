import React, { useReducer } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'antd'
//
import { Grid, Text, Paper, ListInfo, ListDevice } from '../../components'
import { Headers } from './Headers'
import { Panel } from './Panel'
import { Stages } from './Stages'
import { Comments } from './Comments'

import { initialState, reducer, TaskDetailContext } from './store'
import { useAxios, useEffectOnce } from '../../hooks'

export const TaskDetail = () => {
  const { id } = useParams()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    urlGET: `Task/${id}`
  })

  console.log(state)
  const { get, post, put, deleteData } = useAxios()
  const { goBack, location } = useHistory()

  // console.log(state)

  useEffectOnce(() => {
    get(`Tasks/${id}`).then(res =>
      dispatch({ type: 'ADD_STATE', payload: res })
    )
  }, [state.urlGET])

  useEffectOnce(() => {
    get('ManagingFirmUsers').then(emloyeesList => {
      dispatch({ type: 'ADD_EMPLOYEES', payload: emloyeesList })
    })
  })

  const pushStage = () => {
    const data = { NextPerpetratorId: +state.NextPerpetratorId }
    dispatch({ type: 'LOADING', payload: { btnLoading: true } })
    dispatch({ type: 'SET_NEXT_PERPETRATOR_ID', payload: null })
    post(`Tasks/${id}/PushStage`, data).then(res =>
      dispatch({ type: 'PUSH_STAGE', payload: res })
    )
  }
  const revertStage = () => {
    post(`Tasks/${id}/RevertStage`).then(res =>
      dispatch({ type: 'PUSH_STAGE', payload: res })
    )
  }

  const showModal = () => {
    dispatch({ type: 'SHOW_MODAL' })
  }

  const addComment = comment => {
    const data = JSON.stringify(comment)
    dispatch({
      type: 'LOADING',
      payload: { btnLoading: true }
    })
    post(`Tasks/${id}/AddComment`, data).then(res =>
      dispatch({ type: 'ADD_COMMENT', payload: res })
    )
  }

  const saveEditComment = (commentId, comment) => {
    const data = JSON.stringify(comment)
    put(`TaskComments/${commentId}`, data).then(res =>
      dispatch({ type: 'SAVE_EDIT_COMMENT', payload: res })
    )
  }

  const deleteComment = commentId => {
    // console.log(commentId)
    deleteData(`TaskComments/${commentId}`).then(() =>
      dispatch({ type: 'DELETE_COMMENT', payload: commentId })
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
        deleteComment
      }}
    >
      <Grid grid="1" p="16px 0">
        <div className="crumbs">
          <Button style={{ padding: '0 4px 0 0' }} type="link" onClick={goBack}>
            Задачи /
          </Button>
          <Text>{location.state.currentStageName}</Text>
        </div>
        <Headers />
        <Panel />
        <Comments />
        <Paper className="info">
          <ListInfo {...state} mb="24px" />
          <ListDevice {...state.device} />
        </Paper>
        <Stages />
      </Grid>
    </TaskDetailContext.Provider>
  )
}
