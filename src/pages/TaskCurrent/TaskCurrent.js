import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
// import { Spin } from "antd"

import { useAxios, useEffectOnce } from "../../hooks"
import { Context } from "./context"
import { Grid, Paper, Title } from "../../components"
import { Breadcrumbs } from "./BreadCrumbs"
import { Header } from "./Header"
import { Stages } from "./Stages"
import { Panel } from "./Panel"
import { Documents } from "./Documents"
import { Comments } from "./Comments"
import { ListInfo } from "./ListInfo"
import { ListDevice } from "./ListDevice"

export const TaskCurrent = () => {
  const { location } = useHistory()
  const { id } = useParams()
  const { get } = useAxios()
  const [state, setState] = useState({
    ...location.state
  })
  console.log("state", state)

  useEffectOnce(() => {
    get(`/Tasks/${id}`).then(data => setState({ ...state, ...data }))
  })

  const updateState = data => {
    setState(state => ({ ...state, ...data }))
  }

  return (
    <Context.Provider value={{ state, updateState }}>
      <Breadcrumbs url={location.pathname} />
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
    </Context.Provider>
  )
}
