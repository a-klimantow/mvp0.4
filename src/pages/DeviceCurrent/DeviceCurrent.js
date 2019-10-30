import React, { useState } from "react"
import styled from "styled-components"
import { useHistory, useRouteMatch, Route } from "react-router-dom"
import { Spin } from "antd"

import {
  Block,
  Title,
  Grid,
  Paper,
  Tab,
  TabMenu,
  Icon,
  createIconDevice
} from "../../components"
import { ContextDevice } from "./context"
import { Info } from "./Info"
import { Events } from "./Events"

export const DeviceCurrent = () => {
  const {
    push,
    location: { pathname, state: locationState }
  } = useHistory()
  const { url, path } = useRouteMatch()
  const [state, setState] = useState({ ...locationState })

  const updateState = data => {
    setState(state => ({ ...state, ...data }))
  }

  const deviceIcon = createIconDevice(state.resource)

  return (
    <ContextDevice.Provider value={{ state, updateState }}>
      <Block m="16px 0 24px">breadcrumbs</Block>
      <Title weight={300} mb="24px">
        {state.model ? (
          <>
            <IconDevice {...deviceIcon} /> {state.model}
          </>
        ) : (
          <Spin />
        )}
      </Title>
      <Grid>
        <Paper>
          {state.resource ? (
            <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
              <Tab title="Общие данные" id={url} />
              <Tab title="Узлы коммуникации" id={`${url}/узлы`} />
              <Tab title="Подключенные приборы" id={`${url}/Related`} />
            </TabMenu>
          ) : (
            <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
              <Tab title="Общие данные" id={url} />
              <Tab title="Подключенные приборы" id={`${url}/Related`} />
            </TabMenu>
          )}
          <Route path={path} component={Info} exact />
          <Route path={`${path}/узлы`} render={() => <>2</>} />
          <Route path={`${path}/Related`} render={() => <>3</>} />
        </Paper>
        <Events />
      </Grid>
    </ContextDevice.Provider>
  )
}

const IconDevice = styled(Icon)`
  width: 30px;
  height: 30px;
  transform: translateY(5px);
`
