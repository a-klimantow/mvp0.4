import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ConfigProvider } from "antd"
import RU from "antd/es/locale/ru_RU"
//
import { theme } from "./assets/theme"
import { Layout } from "./components"
import {
  Login,
  // Task,
  // TaskCurrent,
  // HousingStocks,
  // ObjDetail,
  UserSettings,
  // DeviceCurrent,
} from "./pages"

import {
  TasksAll,
  TasksCurrent,
  ObjectsAll,
  ObjectsCurrent,
  DeviceCurrent,
  CompanySettings
} from "./pages_new"

function App() {
  // const { path } = useRouteMatch()
  // console.log(useRouteMatch())

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={RU}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Layout>
                <Route
                  path="/tasks"
                  render={({ match }) => (
                    <>
                      <Route exact path={match.path} component={TasksAll} />
                      <Route
                        path={`${match.path}/:taskId`}
                        component={TasksCurrent}
                      />
                    </>
                  )}
                />
                <Route
                  path="/objects"
                  render={({ match }) => (
                    <>
                      <Route path={match.path} component={ObjectsAll} exact />
                      <Route
                        path={`${match.path}/:objectId`}
                        component={ObjectsCurrent}
                        exact
                      />
                      <Route
                        path={`${match.path}/:objectId/device/:deviceId`}
                        component={DeviceCurrent}
                      />
                    </>
                  )}
                />
                <Route path="/company" component={CompanySettings} />
                <Route path="/user" component={UserSettings} />
              </Layout>
            </Route>
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App

// console.log(process.env.NODE_ENV)
