import React, { useState, useEffect } from "react"
import { NavLink, Route } from "react-router-dom"

import { Title, Paper, TabMenu, Grid } from "components"
import { ListInfo } from "./ListInfo"
import { ListDevices } from "./ListDevices"

const titles = [
  "Тип прибора",
  "Серийный номер",
  "Дата ввода в эксплуатацию",
  "Дата поверки прибора",
  "Дата следующей поверки прибора",
  "Диаметр"
]

export const DevicePage = ({ match }) => {
  const [state, setState] = useState({})
  const { device = {} } = state
  const { futureCheckingDate } = device
  const { params } = match

  console.log("device", state)
  const dataListInfo = {
    state: device,
    setState,
    url: `HousingStocks/${params.objectId}/Devices/${params.deviceId}`,
    index: futureCheckingDate,
    titles
  }

  return (
    <>
      {device ? (
        <Title
          weight={300}
          mt="24px"
          mb="24px"
          icon={device.resource || "resource_device"}
        >
          {device.model} ({device.serialNumber})
        </Title>
      ) : (
        "loadign"
      )}

      <Grid>
        <Paper className="left">
          <TabMenu>
            <NavLink to={match.url} exact>
              Общие данные
            </NavLink>
            <NavLink to={`${match.url}/devices`}>Подключенные приборы</NavLink>
          </TabMenu>

          <Route
            path={match.path}
            render={() => <ListInfo data={dataListInfo} />}
            exact
          />
          <Route
            path={`${match.path}/devices`}
            render={() => <ListDevices data={{ state, setState }} />}
          />
        </Paper>
        <Paper className="right"></Paper>
      </Grid>
    </>
  )
}
