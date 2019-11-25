import React, { useState } from "react"
import { NavLink, Route } from "react-router-dom"

import { Title, Grid, Paper, TabMenu } from "components"
import { ListInfo } from "./ListInfo"
import { ListDevices } from "./ListDevices"

const titles = [
  "Город",
  "Район",
  "Индекс",
  "Количество подъездов",
  "Количество этажей",
  "Наличие лифта",
  "Количество квартир",
  "Общая площадь жилых помещений",
  "Площадь нежилых помещений",
  "Придомовая площадь",
  "Общая площадь",
  "Год постройки"
]

export const ObjectCurrentPage = ({ match }) => {
  const [state, setState] = useState({})
  const { street, number } = state

  const dataListInfo = {
    state,
    setState,
    url: `HousingStocks/${match.params.objectId}`,
    index: state.district,
    titles
  }

  return (
    <>
      <Title weight={300} mt="24px" mb="24px">
        {!street ? "loadign..." : `${street}, ${number}`}
      </Title>
      <Grid>
        <Paper className="left">
          <TabMenu>
            <NavLink to={`${match.url}`} exact>
              Общие данные
            </NavLink>
            <NavLink to={`${match.url}/devices`}>Приборы</NavLink>
          </TabMenu>
          <Route
            path={`${match.path}`}
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
