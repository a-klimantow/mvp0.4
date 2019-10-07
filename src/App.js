import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ConfigProvider } from "antd"
import RU from "antd/es/locale/ru_RU"
//
import { theme } from "./assets/theme"
import { Layout } from "./components/organisms"
import { Login, Task } from "./components/pages"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={RU}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Layout>
                <Route path="/" component={Task} exact />
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
