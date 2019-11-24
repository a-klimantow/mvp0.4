import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { StyledWrapper } from "styles"
import { Layout, Button } from "./components"
import { LoginPage, TasksPage, ObjectsPage } from "pages"

export const App = () => (
  <StyledWrapper>
    <Router>
      <Switch>
        <Route path="/login/" component={LoginPage} />
        <Route path="/">
          <Layout>
            <Route path="/tasks/" component={TasksPage} />
            <Route path="/objects/" component={ObjectsPage} />
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
