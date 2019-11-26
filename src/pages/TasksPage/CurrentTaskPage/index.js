import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

import { method } from "services/api"
import { Row, Paper, Grid, Breadcrumbs } from "components"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { Comments } from "./Comments"

const getBc = () => "bc"

export const CurrentTaskPage = () => {
  const location = useLocation()
  const params = useParams()
  const [state, setState] = useState({ ...location.state })
  useEffect(() => {
    method(`Tasks/${params.taskId}`).then(setState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const breadcrumbs = [{ name: "Задачи", to: "/tasks" }, { name: getBc() }]

  return (
    <>
      <Breadcrumbs list={breadcrumbs} />
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
