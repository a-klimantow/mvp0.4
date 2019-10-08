import React, { useReducer, useEffect } from "react"
import { useParams } from "react-router-dom"
//
import { Grid, Title, Text, Paper } from "../../atoms"

import reducer from "./reducer"
import initialState from "./store"
import { useAxios, useTimer } from "../../../hooks"

export const Taskdetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { get, loader } = useAxios()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    get(id).then(res => console.log(res))
  }, [])

  return (
    <Grid grid="1" pt="16px">
      <div className="crumbs">crumbs</div>
      <div className="title">
        <Title weight={300}>Title</Title>
        <Text view="second">subtitle</Text>
      </div>
      <div className="panel">panel</div>
      <Paper className="comment">comment</Paper>
      <Paper className="info">info</Paper>
      <Paper className="r_block">right block</Paper>
    </Grid>
  )
}
