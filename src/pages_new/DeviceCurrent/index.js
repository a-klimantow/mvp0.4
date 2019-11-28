import React, { useState, useEffect } from "react"
import { Spin } from "antd"
import {
  Link as bc,
  useParams,
  useHistory,
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
  const [state, setState] = useState({ ...location.state, tab: "info" })
  const { device, model, devices, events = [], tab } = state
  console.log(devices)
  const updateState = data => setState(state => ({ ...state, ...data }))

  useEffect(() => {
    if (tab === "info") {
      get(`HousingStocks/${objectId}/Devices/${deviceId}`).then(updateState)
    }
    if (tab === "devices") {
      get(`HousingStocks/${objectId}/Devices/${deviceId}/Related`).then(res => {
        console.log("from ", res)
        updateState(res)
      })
    }
  }, [tab])

  useEffect(() => {
    if (!events) {
      get(`Tasks?GroupType=NotArchived&Take=3&DeviceId=${deviceId}`).then(
        data => {
          // console.log(data)
          updateState({ events: data.items })
        }
      )
      console.log("in func", events)
    }
  }, [events])
  console.log(state)
  const deviceIcon = device && createIconDevice(device.resource)

  const clickTab = e => {
    e.preventDefault()
    updateState({ tab: e.target.id })
  }

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
          {/* <TabMenu defaultActive={tab} getActiveTab={tab => setTab(tab)}>
            <Tab title="Общие данные" id="info" />
            {false && <Tab title="Узлы коммуникации" id="nodes" />}
            <Tab title="Подключенные приборы" id="devices" />
          </TabMenu> */}
          <Tabs>
            <button
              onClick={clickTab}
              id="info"
              className={tab === "info" ? "active" : " "}
            >
              Общие данные
              <span />
            </button>
            <button
              onClick={clickTab}
              id="devices"
              className={tab === "devices" ? "active" : " "}
            >
              Узды учета
              <span />
            </button>
          </Tabs>
          {tab === "info" && <ListInfo device={device} />}
          {tab === "nodes" && "nodes"}
          {tab === "devices" && <ListDevices data={devices} cb={updateState} />}
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
const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.09);
  button {
    display: block;
    padding: 0 16px 10px;
    color: ${p => p.theme.text.color.primary};
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    > span {
      dispaly: block;
      width: 0%;
      height: 2px;
      background: ${p => p.theme.color.primary};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  button:hover {
    color: ${p => p.theme.color.primary};
  }

  button.active {
    color: ${p => p.theme.color.primary};
    > span {
      width: 100%;
    }
  }
`
