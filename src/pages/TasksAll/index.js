import React, { useState } from "react"
import { Route, useRouteMatch, useLocation, Redirect } from "react-router-dom"

import { Title, Paper, Tabs, NavLink } from "../../components"
import { Filter } from "./Filter"
import { ListTasks } from "./ListTasks"
import { TasksContext } from "./context"

export const TasksAll = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const [state, setState] = useState({})

  const { executingTasksCount = null, observingTasksCount = null } = state

  if (pathname === path) {
    return <Redirect to={`${path}/Executing`} />
  }

  return (
    <TasksContext.Provider value={{ state, setState }}>
      <Title weight={300} m="24px 0 16px">
        Задачи
      </Title>
      <Paper>
        <Tabs>
          <NavLink to={`${path}/Executing`} exact>
            {!executingTasksCount
              ? "К исполнению"
              : `К исполнению (${executingTasksCount})`}
          </NavLink>
          <NavLink to={`${path}/Observing`}>
            {!observingTasksCount
              ? "Наблюдаемые"
              : `Наблюдаемые (${executingTasksCount})`}
          </NavLink>
          <NavLink to={`${path}/Archived`}>Архивные</NavLink>
        </Tabs>
        <Filter />
        <Route path={`${path}/:GroupType`} component={ListTasks} />
      </Paper>
    </TasksContext.Provider>
  )
}
