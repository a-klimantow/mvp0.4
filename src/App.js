import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import RU from 'antd/es/locale/ru_RU'
//
import { theme } from './assets/theme'
import { Layout } from './components'
import { Login, Task, TaskDetail, Obj, ObjDetail } from './pages'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={RU}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Redirect from="/" to="task" />
              <Layout>
                <Route path="/" component={Task} exact />
                <Route path="/task/:id" component={TaskDetail} />
                <Route path="/object" component={Obj} exact />
                <Route path="/object/:id" component={ObjDetail} />
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
