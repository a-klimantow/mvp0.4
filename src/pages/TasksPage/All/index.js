import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import { Paper, Title, TabMenu } from "components"
import { AllTasksList } from "./AllTasksList"
import { method } from "services/api"
import { useCreateComponent } from "hooks"

export const All = () => {
  const { pathname, search: tab } = useLocation()
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const { executingTasksCount, observingTasksCount } = state
  const Test = useCreateComponent({
    Type: "Text",
    props: { children: "hello" }
  })
  useEffect(() => {
    let mount = true
    setLoading(true)
    method
      .get(`Tasks${tab}`)
      .then(data => {
        const newData = data.items.map(item => ({
          ...item,
          url: `/tasks/${item.id}`
        }))
        setState(currentState => ({ ...currentState, ...data, items: newData }))
      })
      .finally(() => mount && setLoading(false))
    return () => (mount = false)
  }, [tab])

  return (
    <>
      <Title weight={300} mt="24px" mb="24px">
        Задачи
      </Title>
      <Paper>
        <TabMenu>
          <Link
            to={{ pathname, search: "GroupType=Executing" }}
            className={tab === "?GroupType=Executing" ? "active" : ""}
          >
            К исполнению {!!executingTasksCount && `(${executingTasksCount})`}
          </Link>
          <Link
            to={{ pathname, search: "GroupType=Observing" }}
            className={tab === "?GroupType=Observing" ? "active" : ""}
          >
            Наблюдаемые {!!observingTasksCount && `(${observingTasksCount})`}
          </Link>
          <Link
            to={{ pathname, search: "GroupType=Archived" }}
            className={tab === "?GroupType=Archived" ? "active" : ""}
          >
            Архив
          </Link>
        </TabMenu>
        <AllTasksList items={state.items} loading={loading} />
      </Paper>
    </>
  )
}
