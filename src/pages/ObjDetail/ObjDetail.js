/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Button, Spin } from "antd"
import styled from "styled-components"
import { useHistory, Route, useRouteMatch, Link } from "react-router-dom"

import { Text, Title, Paper, TabMenu, Tab, Block, Grid } from "../../components"
import { GenInfo } from "./GenInfo"
import { Devices } from "./Devices"
import { Events } from "./Events"
import { useAxios, useEffectOnce } from "../../hooks"
import { ContextHouses } from "./context"

export const ObjDetail = () => {
  const {
    push,
    location: { pathname }
  } = useHistory()
  const match = useRouteMatch()
  const { get, source } = useAxios()
  const [state, setState] = useState({})

  useEffectOnce(() => {
    get(pathname).then(setState)
    return () => source.cancel("cancel info")
  })

  console.log(state)

  const updateState = data => {
    setState(state => ({ ...state, ...data }))
  }
  const { street, number } = state

  return (
    <>
      <Block m="16px 0 24px">
        <LinkTo to="/HousingStocks">Жилой фонд /</LinkTo>
        <Text>{street ? street : <Spin size="small" />}</Text>
      </Block>
      <Title weight={300} className="head" mb="24px">
        {street ? `${street}, ${number}` : <Spin />}
      </Title>
      <Grid>
        <Paper className="list">
          <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
            <Tab title="Общие данные" id={match.url} />
            <Tab title="Узлы учета" id={`${match.url}/Devices`} />
          </TabMenu>
          {/* <Route
            path={match.path}
            render={() => <GenInfo info={state} />}
            exact
            />
          <Route path={`${match.path}/Devices`} component={Devices} /> */}
        </Paper>

        <Events className="event" />
      </Grid>
    </>
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
