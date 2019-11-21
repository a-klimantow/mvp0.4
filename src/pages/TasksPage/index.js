import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"

import { useApi } from "hooks"
import { ContextTasksPage } from "./context"
import { All } from "./All"

export const TasksPage = ({ match }) => {
  const { getData } = useApi()
  const [state, setState] = useState({
    search: "Executing"
  })
  const { search } = state

  useEffect(() => {
    let mount = true
    getData(`Tasks?GroupType=${search}`).then(res => {
      if (mount) {
        const items = res.items.map(item => ({
          ...item,
          url: `/tasks/${item.id}`
        }))
        updateState({ ...res, items })
      }
    })
    return () => (mount = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  console.log(state)
  const updateState = data => setState(state => ({ ...state, ...data }))

  const changeTab = e => {
    const search = e.target.getAttribute("data-name")
    updateState({ search })
  }

  return (
    <ContextTasksPage.Provider value={{ state, updateState, changeTab }}>
      <Route path={match.url} component={All} exact />
      <Route path={`${match.url}/id:tasksId`} render={() => <h1>id</h1>} />
    </ContextTasksPage.Provider>
  )
}
