import React, { useEffect, useState } from "react"
import { Button } from "antd"
import { useHistory, Route, useRouteMatch } from "react-router-dom"

import { Grid, Text, Title, Paper, TabMenu, Tab, Block } from "../../components"
import { GenInfo } from "./GenInfo"
import { Devices } from "./Devices"
import { Events } from "./Events"
import { useAxios } from "../../hooks"

export const ObjDetail = () => {
  const {
    push,
    location: { pathname, state }
  } = useHistory()
  const match = useRouteMatch()
  const { get, source } = useAxios()
  const [info, setInfo] = useState(null)
  // const [events, setEvents] = useState(null)

  useEffect(() => {
    get(pathname).then(setInfo)
    // get(`Tasks?Take=3&HouseStokId=${match.params.id}`).then(data => {
    //   console.log(data)
    //   setEvents(data.items)

    // }
    // )
    return () => source.cancel("cancel info")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(state)

  const street = state ? state.street : info && `${info.street}, ${info.number}`

  return (
    <>
      <Block m="16px 0 24px">
        <Button
          style={{ padding: "0 4px 0 0" }}
          type="link"
          onClick={() => push(pathname)}
        >
          Жилой фонд /
        </Button>
        <Text>{street}</Text>
      </Block>
      <Title weight={300} mb="24px">
        {street}
      </Title>
      <Grid>
        <Route path={match.path}>
          <Paper className="info">
            <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
              <Tab title="Общие данные" id={match.url} />
              <Tab title="Узлы учета" id={`${match.url}/Devices`} />
            </TabMenu>
            <Route
              path={match.path}
              render={() => <GenInfo info={info} />}
              exact
            />
            <Route path={`${match.path}/Devices`} component={Devices} />
          </Paper>
        </Route>
        <Events />
      </Grid>
    </>
  )
}
