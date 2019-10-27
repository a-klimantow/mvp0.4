import React, { useEffect, useState } from "react"
import { Button } from "antd"
import { useHistory, Route, useRouteMatch } from "react-router-dom"

import { Grid, Text, Title, Paper, TabMenu, Tab, Ul } from "../../components"
import { GenInfo } from "./GenInfo"
import { Devices } from "./Devices"
import { useAxios } from "../../hooks"

export const ObjDetail = () => {
  const {
    push,
    location: { pathname, state }
  } = useHistory()
  const match = useRouteMatch()
  const { get, source } = useAxios()
  const [info, setInfo] = useState(null)

  useEffect(() => {
    get(pathname).then(setInfo)
    return () => source.cancel("cancel info")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(state)

  const street = state ? state.street : info && info.street

  return (
    <Grid grid="2" p="16px 0">
      <div className="crumbs">
        <Button
          style={{ padding: "0 4px 0 0" }}
          type="link"
          onClick={() => push(pathname)}
        >
          Объекты /
        </Button>
        <Text>{street}</Text>
      </div>
      <Title weight={300}>{street}</Title>
      <Paper className="info">
        <TabMenu getActiveTab={id => push(id)} defaultActive={pathname}>
          <Tab title="Общие данные" id={match.url} />
          <Tab title="Узлы учета" id={`${match.url}/Devices`} />
        </TabMenu>
        <Route path={match.path}>
          <Route path={match.path} render={() => <GenInfo info={info}/>} exact />
          <Route path={`${match.path}/Devices`} component={Devices} />
        </Route>
      </Paper>
      <Paper className="r_block">
        <Title level={3} mb="32px">
          События с объектом
        </Title>
        <Ul>
          <li>1</li>
        </Ul>
      </Paper>
    </Grid>
  )
}
