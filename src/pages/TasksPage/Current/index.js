import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

import { useApi } from "hooks"
import { Row, Paper, Grid } from "components"
import { useTasksPageContext } from "../useTasksPageContext"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { Comments } from "./Comments"

export const Current = () => {
  const { getData } = useApi()
  const { state: localState } = useLocation()
  const { taskId } = useParams()
  const { state, updateState } = useTasksPageContext()
  useEffect(() => {
    updateState(localState)
    getData(`Tasks/${taskId}`).then(updateState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(state)
  return (
    <>
      <Header />
      <Panel />
      <Row>
        <Grid>
          <div className="left">
            <Comments comments={state.comments} />
            <Paper>list</Paper>
          </div>
          <div className="right">
            <Paper />
          </div>
        </Grid>
      </Row>
    </>
  )
}
