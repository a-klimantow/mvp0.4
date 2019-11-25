import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

import { method } from "services/api"
import { Row, Paper, Grid } from "components"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { Comments } from "./Comments"

export const Current = () => {
  const location = useLocation()
  const { taskId } = useParams()
  const [state, setState] = useState({ ...location.state })
  useEffect(() => {
    method(`Tasks/${taskId}`).then(setState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(state)
  return (
    <>
      <Header state={state} />
      <Panel state={state} />
      <Row>
        <Grid>
          <div>
            <Comments comments={state.comments} />
            <Paper>list</Paper>
          </div>

          <Paper />
        </Grid>
      </Row>
    </>
  )
}
