import React, { useState, useEffect } from "react"
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom"

import { AllTasksPage } from "./AllTasksPage"
import { CurrentTaskPage } from "./CurrentTaskPage"

export const TasksPage = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/current/:taskId`}
        component={CurrentTaskPage}
      />
      <Route path={`${match.url}/:GroupType`} component={AllTasksPage} />
      <Redirect to={`${match.url}/Executing`} />
    </Switch>
  )
}
