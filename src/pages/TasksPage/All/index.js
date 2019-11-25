/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

import { Paper, Title, TabMenu } from "components"
import { AllTasksList } from "./AllTasksList"
import { method } from "services/api"

export const All = () => {
  const {
    replace,
    location: { pathname, search }
  } = useHistory()

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const { executingTasksCount, observingTasksCount } = state
  console.log(state)
  useEffect(() => {
    let mount = true
    setLoading(true)
    method
      .get(`Tasks${search}`)
      .then(setState)
      .finally(() => mount && setLoading(false))
    return () => (mount = false)
  }, [search])

  return (
    <>
      <Title weight={300} mt="24px" mb="24px">
        Задачи
      </Title>
      <Paper>
        <TabMenu>
          <Link
            to={{ pathname, search: "GroupType=Executing" }}
            className={search === "?GroupType=Executing" ? "active" : ""}
          >
            К исполнению {!!executingTasksCount && `(${executingTasksCount})`}
          </Link>
          <Link
            to={{ pathname, search: "GroupType=Observing" }}
            className={search === "?GroupType=Observing" ? "active" : ""}
          >
            Наблюдаемые {!!observingTasksCount && `(${observingTasksCount})`}
          </Link>
          <Link
            to={{ pathname, search: "GroupType=Archived" }}
            className={search === "?GroupType=Archived" ? "active" : ""}
          >
            Архив
          </Link>
        </TabMenu>
        <AllTasksList items={state.items} loading={loading} />
      </Paper>
    </>
  )
}
