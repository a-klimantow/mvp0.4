import React, { useState, useEffect } from "react"
import { Spin } from "antd"
import {
  Link as bc,
  useParams,
  useHistory,
  Route,
  useRouteMatch
} from "react-router-dom"
import styled from "styled-components"

import { useAxios, useEffectOnce } from "../../hooks"
import {
  Block,
  Text,
  Icon,
  Title,
  createIconDevice,
  Tab,
  TabMenu,
  Paper,
  Grid
} from "../../components"
import { ListInfo } from "./LIstInfo"
import { ListDevices } from "./ListDevices"
import { Events } from "./Events"

export const DeviceCurrent = () => {
  const { get } = useAxios()
  const { location } = useHistory()
  const { objectId, deviceId } = useParams()
  const [tab, setTab] = useState("info")
  const [state, setState] = useState({ ...location.state })
  const { device, model, devices, events } = state
  // console.log(state)
  const updateState = data => setState(state => ({ ...state, ...data }))

  useEffect(() => {
    if (tab === "info" && !device) {
      get(`HousingStocks/${objectId}/Devices/${deviceId}`).then(updateState)
    }
    if (tab === "devices" && !devices) {
      get(`HousingStocks/${objectId}/Devices/${deviceId}/Related`).then(res => {
        updateState(res)
      })
    }
  }, [tab])

  useEffectOnce(() => {
    get(`Tasks?GroupType=NotArchived&Take=3&DeviceId=${deviceId}`).then(
      data => {
        // console.log(data)
        updateState({ events: data.items })
      }
    )
  })
  console.log(state)
  const deviceIcon = device && createIconDevice(device.resource)
  return (
    <>
      <Block m="16px 0 24px">
        <LinkBc to={"/objects"}>Объекты /</LinkBc>
        {device ? (
          <>
            <LinkBc
              to={`/objects/${objectId}`}
            >{`${state.street}, ${state.number} /`}</LinkBc>
            <Text>{model ? model : device.model}</Text>
          </>
        ) : (
          <Spin size="small" />
        )}
      </Block>
      <Title weight={300} mb="24px">
        {device ? (
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
          <TabMenu defaultActive={tab} getActiveTab={tab => setTab(tab)}>
            <Tab title="Общие данные" id="info" />
            {false && <Tab title="Узлы коммуникации" id="nodes" />}
            <Tab title="Подключенные приборы" id="devices" />
          </TabMenu>
          {tab === "info" && <ListInfo device={device} />}
          {tab === "nodes" && "nodes"}
          {tab === "devices" && (
            <ListDevices
              data={devices}
              cb={() => {
                setTab("info")
                setState({})
              }}
            />
          )}
        </Paper>
        <Events events={events} />
      </Grid>
    </>
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
  color: ${p => p.theme.text.color.primary};
  margin-right: 4px;
`
