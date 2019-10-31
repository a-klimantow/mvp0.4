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
  Task,
  TaskCurrent,
  HousingStocks,
  ObjDetail,
  UserSettings,
  DeviceCurrent
} from "./pages"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={RU}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Layout>
                <Switch>
                  <Route path="/Tasks/:id" component={TaskCurrent} />
                  <Route path="/Tasks" component={Task} />
                  <Route
                    path="/HousingStocks/:id/Devices/:deviceId"
                    component={DeviceCurrent}
                  />
                  <Route path="/HousingStocks/:id" component={ObjDetail} />
                  <Route path="/HousingStocks" component={HousingStocks} />
                  <Route path="/settings" component={UserSettings} />
                </Switch>
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
