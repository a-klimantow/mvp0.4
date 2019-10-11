import React, { useReducer, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "antd"
//
import { Grid, Text, Paper } from "../../atoms"
import { Headers } from "../../molocules"
import { Comments, ListInfo, ListDevice, Stages, Panel } from "../../organisms"

import { initialState, reducer } from "./store"
import { useAxios, useEffectOnce } from "../../../hooks"

export const Taskdetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { get, post } = useAxios()
  const { id } = useParams()
  const { goBack } = useHistory()

  console.log("state", state)
  useEffectOnce(() => {
    get(`Tasks/${id}`).then(res =>
      dispatch({ type: "ADD_STATE", payload: res })
    )
  })

  useEffect(() => {
    if (state.url) {
    }
  })

  return (
    <Grid grid="1" p="16px 0">
      <div className="crumbs">
        <Button style={{ padding: "0 4px 0 0" }} type="link" onClick={goBack}>
          Задачи /
        </Button>
        <Text>{state.currentStageName}</Text>
      </div>
      <Headers name={state.name} currentStageName={state.currentStageName} />
      <Panel
        expectedCompletionTime={state.expectedCompletionTime}
        isPauk={true}
        taskId={id}
      />
      <Comments />
      <Paper className="info">
        <ListInfo {...state} mb="24px" />
        <ListDevice {...state.device} />
      </Paper>
      <Stages stages={state.stages} />
    </Grid>
  )
}
