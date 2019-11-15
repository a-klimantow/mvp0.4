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
  createIconDevice,
  CustomLink as bc,
  Text
} from "../../components"
import { ContextDevice } from "./context"
import { Info } from "./Info"
import { Events } from "./Events"
import { Devices } from "./Devices"

export const DeviceCurrent = () => {
  const {
    push,
    location: { pathname, state: locationState }
  } = useHistory()
  const { url, path, params } = useRouteMatch()
  const [state, setState] = useState({ ...locationState })
  const { device } = state
  const updateState = data => {
    setState(state => ({ ...state, ...data }))
  }
  const current = device ? device.model : ""
  const deviceIcon = device && createIconDevice(device.resource)

  // console.log("devise page", state)
  return (
    <ContextDevice.Provider value={{ state, setState, updateState }}>
      <Block m="16px 0 24px">
        <LinkBc to="/HousingStocks">Жилой фонд /</LinkBc>
        {device ? (
          <>
            <LinkBc
              to={`/HousingStocks/${params.id}`}
            >{`${state.street}, ${state.number} /`}</LinkBc>
            <Text>{current}</Text>
          </>
        ) : (
          <Spin size="small" />
        )}
      </Block>
      <Title weight={300} mb="24px">
        {state.device ? (
          <>
            <IconDevice {...deviceIcon} /> {device.model} ({device.serialNumber}
            )
          </>
        ) : (
          <Spin />
        )}
      </Title>
      <Grid>
        <Paper>
          {state.resource ? (
            <TabMenu getActiveTab={id => push(id)} defaultActive={url}>
              <Tab title="Общие данные" id={url} />
              <Tab title="Узлы коммуникации" id={`${url}/узлы`} />
              <Tab title="Подключенные приборы" id={`${url}/Related`} />
            </TabMenu>
          ) : (
            <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
              <Tab
                title="Общие данные"
                id={`/HousingStocks/${params.id}/Devices/${params.deviceId}`}
              />
              <Tab
                title="Подключенные приборы"
                id={`/HousingStocks/${params.id}/Devices/${params.deviceId}/Related`}
              />
            </TabMenu>
          )}
          <Route path={path} component={Info} exact />
          <Route path={`${path}/узлы`} render={() => <>2</>} />
          <Route path={`${path}/Related`} component={Devices} />
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

const LinkBc = styled(bc).attrs({
  type: "text"
})`
  margin-right: 4px;
`
