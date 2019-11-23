import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { StyledWrapper } from "styles"
import { Layout, Button } from "./components"
import { Login, TasksPage } from "pages"

export const App = () => (
  <StyledWrapper>
    <Router>
      <Switch>
        <Route path="/login/" component={Login} />
        <Route path="/">
          <Layout>
            <Route path="/tasks" component={TasksPage} />
            <Route path="/objects/" render={() => <>obj</>} />
            <Route
              path="/user"
              render={() => (
                <Button view="primary" mt="100px">
                  button
                </Button>
              )}
            />
          </Layout>
        </Route>
      </Switch>
    </Router>
  </StyledWrapper>
)
