import React, { useState, useEffect } from "react"
import { Spin } from "antd"
import styled from "styled-components"
import { useHistory, Route, useRouteMatch, Link } from "react-router-dom"

import { Text, Title, Paper, TabMenu, Tab, Block, Grid } from "../../components"
import { Info } from "./Info"
import { Devices } from "./Devices"
import { Events } from "./Events"
import { ContextHouses } from "./context"

export const ObjDetail = () => {
  const {
    push,
    location: { pathname, state: locationState }
  } = useHistory()
  const { path, params } = useRouteMatch()
  const [state, setState] = useState({ ...locationState })

  const updateState = data => {
    setState(state => ({ ...state, ...data }))
  }
  const { street, number } = state
  useEffect(() => () => updateState({ street: null, devices: null }), [])

  console.log("obj page")

  return (
    <ContextHouses.Provider value={{ state, updateState }}>
      <Block m="16px 0 24px">
        <LinkTo to="/HousingStocks">Объекты /</LinkTo>
        <Text>{street ? street : <Spin size="small" />}</Text>
      </Block>
      <Title weight={300} className="head" mb="24px">
        {street ? `${street}, ${number}` : <Spin />}
      </Title>
      <Grid>
        <Paper>
          <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
            <Tab title="Общие данные" id={`/HousingStocks/${params.id}`} />
            <Tab
              title="Узлы учета"
              id={`/HousingStocks/${params.id}/Devices`}
            />
          </TabMenu>
          <Route path={path} component={Info} exact />
          <Route path={`${path}/Devices`} component={Devices} />
        </Paper>

        <Events />
      </Grid>
    </ContextHouses.Provider>
  )
}

const LinkTo = styled(Link)`
  margin-right: 4px;
  cursor: pointer;
  color: ${p => p.theme.text.color.primary};
  &:hover {
    color: ${p => p.theme.color.primary};
  }
`

// const Grid = styled.div`
//   display: grid;
//   grid-template-areas:
//     "bc bc"
//     "head head"
//     "list event";
//   grid-template-columns: 8fr 4fr;
//   grid-gap: 24px;

//   .bc {
//     padding-top: 16px;
//   }

//   .event {
//     grid-area: event;
//     align-self: start;
//   }

//   .list {
//     grid-area: list;
//     align-self: start;
//   }

//   .head {
//     grid-area: head;
//   }
// `
