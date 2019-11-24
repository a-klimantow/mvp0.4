import React from "react"
import { Route, Switch } from "react-router-dom"

import { ObjectsAll } from "./ObjectsAll"
import { ObjectCurrentPage } from "./ObjectCurrentPage"
import { DevicePage } from "./DevicePage"

export const ObjectsPage = ({ match }) => (
  <>
    <Route path={match.path} component={ObjectsAll} exact />
    <Switch>
      <Route
        path={`${match.path}:objectId/device/:deviceId`}
        component={DevicePage}
      />
      <Route path={`${match.path}:objectId`} component={ObjectCurrentPage} />
    </Switch>
  </>
)
