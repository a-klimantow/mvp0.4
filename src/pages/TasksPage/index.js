import React from "react"
import { Route } from "react-router-dom"

import { All } from "./All"

export const TasksPage = ({ match }) => (
  <>
    <Route path={match.url} component={All} exact />
    <Route path={`${match.url}/id:tasksId`} render={() => <h1>id</h1>} />
  </>
)
