import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams, Link as link, useLocation } from "react-router-dom"
import { Spin } from "antd"

import { ObjectsCurrentContext } from "./context"
import { useAxios, useEffectOnce } from "../../hooks"
import { Block, Text, Title, Grid, Paper, TabMenu, Tab } from "../../components"
import { ListInfo } from "./ListInfo"
import { ListDevices } from "./ListDevices"
import infoJSON from "./info.json"
import { Events } from "./Events"

export const ObjectsCurrent = () => {
  const { get } = useAxios()
  const location = useLocation()
  const params = useParams()
  const [state, setState] = useState({ ...location.state })
  const [tab, setTab] = useState("info")
  const { street, number } = state
  // console.log("state", state)

  const updateState = data => setState(state => ({ ...state, ...data }))

  useEffectOnce(() => {
    get(
      `Tasks?GroupType=NotArchived&Take=3&HousingStockId=${params.objectId}`
    ).then(res => updateState({ events: res.items }))
  })

  useEffect(() => {
    if (!state.district) {
      get(`HousingStocks/${params.objectId}`).then(updateState)
    }
    if (tab === "devices" && !state.devices) {
      get(`HousingStocks/${params.objectId}/Devices`).then(updateState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const toggleTab = tab => {
    setTab(tab)
  }

  return (
    <ObjectsCurrentContext.Provider value={{}}>
      <Block m="16px 0 24px">
        <Link to="/objects">Объекты /</Link>
        <Text>{street ? `${street}, ${number} ` : <Spin size="small" />}</Text>
      </Block>
      <Title weight={300} mb="24px">
        {street ? `${street}, ${number} ` : <Spin />}
      </Title>
      <Grid>
        <Paper>
          <TabMenu defaultActive={tab} getActiveTab={toggleTab}>
            <Tab title="Общие данные" id="info" />
            <Tab title="Приборы" id="devices" />
          </TabMenu>
          {tab === "info" ? (
            <ListInfo state={state} info={infoJSON} />
          ) : (
            <ListDevices data={state.devices} />
          )}
        </Paper>
        <Events events={state.events} />
      </Grid>
    </ObjectsCurrentContext.Provider>
  )
}

const Link = styled(link)`
  margin-right: 4px;
  cursor: pointer;
  color: ${p => p.theme.text.color.primary};
  &:hover {
    color: ${p => p.theme.color.primary};
  }
`
