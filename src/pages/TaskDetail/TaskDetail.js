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
  const [state, dispatch] = useReducer(reducer, initialState)
  const { get, moveStage } = useAxios()
  const { id } = useParams()
  const { goBack, location } = useHistory()

  console.log(state)

  useEffectOnce(() => {
    get(`Tasks/${id}`).then(res =>
      dispatch({ type: 'ADD_STATE', payload: res })
    )
  })

  useEffectOnce(() => {
    get('ManagingFirmUsers').then(emloyeesList => {
      dispatch({ type: 'ADD_EMPLOYEES', payload: emloyeesList })
    })
  })

  const pushStage = () => {
    const data = { NextPerpetratorId: +state.NextPerpetratorId }
    dispatch({ type: 'SET_NEXT_PERPETRATOR_ID', payload: null })
    moveStage(id, 'PushStage', data).then(res =>
      dispatch({ type: 'PUSH_STAGE', payload: res })
    )
  }
  const revertStage = () => {
    moveStage(id, 'RevertStage').then(res =>
      dispatch({ type: 'PUSH_STAGE', payload: res })
    )
  }

  const showModal = () => {
    dispatch({ type: 'SHOW_MODAL' })
  }

  return (
    <TaskDetailContext.Provider
      value={{ state, dispatch, pushStage, revertStage, showModal }}
    >
      <Grid grid="1" p="16px 0">
        <div className="crumbs">
          <Button style={{ padding: '0 4px 0 0' }} type="link" onClick={goBack}>
            Задачи /
          </Button>
          <Text>{location.state.currentStageName}</Text>
        </div>
        <Headers
          name={location.state.name}
          currentStageName={location.state.currentStageName}
        />
        <Panel
          expectedCompletionTime={state.expectedCompletionTime}
          isPauk={true}
          taskId={id}
        />
        <Comments comments={state.comments} />
        <Paper className="info">
          <ListInfo {...state} mb="24px" />
          <ListDevice {...state.device} />
        </Paper>
        <Stages />
      </Grid>
    </TaskDetailContext.Provider>
  )
}
