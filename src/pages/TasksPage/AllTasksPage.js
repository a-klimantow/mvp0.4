import React, { useState, useEffect } from "react"
import { NavLink, Route, useRouteMatch } from "react-router-dom"

import { Paper, Title, TabMenu } from "components"
import { method } from "services/api"
import { correctedForAllTasksPage } from "services/correctedData"
import { useListCreatorFromArr } from "hooks"
import { AllTasksListItem } from "./AllTasksListItem"

export const AllTasksPage = () => {
  const {
    url,
    params: { GroupType }
  } = useRouteMatch()
  const [state, setState] = useState({})
  const { executingTasksCount, observingTasksCount } = state
  const tasksList = useListCreatorFromArr(state.items, AllTasksListItem)

  useEffect(() => {
    setState(state => ({ ...state, items: null }))
    method
      .get(`Tasks?GroupType=${GroupType}`)
      .then(correctedForAllTasksPage)
      .then(setState)
  }, [GroupType])

  const tabs = [
    {
      to: "Executing",
      title: !executingTasksCount
        ? "К исполнению"
        : `К исполнению (${executingTasksCount})`
    },
    {
      to: "Observing",
      title: !observingTasksCount
        ? "Наблюдаемые"
        : `Наблюдаемые (${observingTasksCount})`
    },
    {
      to: "Archived",
      title: "Архивные"
    }
  ]

  return (
    <>
      <Title weight={300} mt="24px">
        Задачи
      </Title>
      <Paper>
        <TabMenu>
          {tabs.map(tab => (
            <NavLink
              key={tab.to}
              to={`/tasks/${tab.to}`}
              // activeClassName="active"
            >
              {tab.title}
            </NavLink>
          ))}
        </TabMenu>
        <Route path={url} render={() => tasksList} />
      </Paper>
    </>
  )
}