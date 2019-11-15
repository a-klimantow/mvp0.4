import React, { useEffect, useState } from "react"
// import { Link, useRouteMatch } from "react-router-dom"

import { useAxios } from "../../hooks"
import { Title, Paper, Tab, TabMenu } from "../../components"
import { ListTasks } from "./ListTasks"

export const TasksAll = () => {
  const { get, source } = useAxios()
  const [tab, setTab] = useState("Executing")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({})
  const { observingTasksCount, executingTasksCount, items } = state
  useEffect(() => {
    setLoading(true)
    get(`Tasks?GroupType=${tab}`)
      .then(setState)
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      source.cancel("tasks")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <>
      <Title weight={300} m="24px 0">
        Задачи
      </Title>
      <Paper>
        <TabMenu defaultActive={tab} getActiveTab={tab => setTab(tab)}>
          <Tab
            title={
              !executingTasksCount
                ? "К исполнению"
                : `К исполнению (${executingTasksCount})`
            }
            id="Executing"
          />
          <Tab
            title={
              !observingTasksCount
                ? "Наблюдаемые"
                : `Наблюдаемые (${observingTasksCount})`
            }
            id="Observing"
          />
          <Tab title="Архив" id="Archived" />
        </TabMenu>
        <ListTasks data={items} loading={loading} tab={tab} />
      </Paper>
    </>
  )
}
