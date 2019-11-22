import React, { useState } from "react"
import { Route } from "react-router-dom"

import { ContextTasksPage } from "./context"
import { All } from "./All"
import { Current } from "./Current"

export const TasksPage = ({ match }) => {
  const [state, setState] = useState({
    search: "Executing"
  })

  const updateState = data => setState(state => ({ ...state, ...data }))

  const changeTab = e => {
    const search = e.target.getAttribute("data-name")
    updateState({ search })
  }

  return (
    <ContextTasksPage.Provider value={{ state, updateState, changeTab }}>
      <Route path={match.url} component={All} exact />
      <Route path={`${match.url}/:taskId`} component={Current} />
    </ContextTasksPage.Provider>
  )
}
