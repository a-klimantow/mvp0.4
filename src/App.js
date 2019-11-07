import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ConfigProvider } from "antd"
import RU from "antd/es/locale/ru_RU"
//
import { theme } from "./assets/theme"
import { Login, TasksAll } from "./pages"
import { Layout } from "./components/Layout"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={RU}>
        <BrowserRouter>
          <Switch>
            <Route path="/Вход" component={Login} />
            <Route path="/">
              <Layout>
                <Route path="/Tasks" component={TasksAll} />
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
