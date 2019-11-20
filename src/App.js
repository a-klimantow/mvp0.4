import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { StyledWrapper } from "styles"
import { Layout } from "./components"
import { Login } from "pages"

export const App = () => (
  <StyledWrapper>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/">
          <Layout>
            <Route path="/tasks" render={() => <>tasks</>} />
            <Route path="/objects" render={() => <>obj</>} />
            <Route path="/user" render={() => <>user</>} />
          </Layout>
        </Route>
      </Switch>
    </Router>
  </StyledWrapper>
)
