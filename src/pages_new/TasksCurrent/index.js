import React, { useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { useAxios, useEffectOnce } from "../../hooks"
import { Paper, Grid, Title } from "../../components"
import { TasksCurrentContext } from "./context"
import { Breadcrumbs } from "./BreadCrumbs"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { Documents } from "./Documents"
import { Comments } from "./Comments"
import { Stages } from "./Stages"
import { ListInfo } from "./ListInfo"
import { ListDevice } from "./ListDevice"

export const TasksCurrent = () => {
  const { get } = useAxios()
  const { location } = useHistory()
  const { taskId } = useParams()
  const [state, setState] = useState({ ...location.state })
  // console.log(state)

  const updateState = data => setState(state => ({ ...state, ...data }))

  useEffectOnce(() => {
    get(`Tasks/${taskId}`).then(updateState)
  })

  return (
    <TasksCurrentContext.Provider value={{ state, updateState }}>
      <Breadcrumbs />
      <Header />
      <Panel />
      <Documents />
      <Grid>
        <div>
          <Comments />
          <Paper>
            <Title level={3} mb="16px">
              Информация о задаче
            </Title>
            <ListInfo />
            <ListDevice />
          </Paper>
        </div>
        <Stages />
      </Grid>
    </TasksCurrentContext.Provider>
  )
}
