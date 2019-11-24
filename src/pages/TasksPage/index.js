import React from "react"
import { Route } from "react-router-dom"

import { All } from "./All"
import { Current } from "./Current"

export const TasksPage = ({ match }) => (
  <>
    <Route path={match.url} component={All} exact />
    <Route path={`${match.url}/:taskId`} component={Current} />
  </>
)
