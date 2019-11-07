import React, { useEffect, useContext } from "react"
import { useRouteMatch } from "react-router-dom"

import { TasksContext } from "./context"
import { List } from "../../components"
import { useAxios } from "../../hooks"

export const ListTasks = () => {
  const { state, setState } = useContext(TasksContext)
  const { params } = useRouteMatch()
  const { get } = useAxios()

  const { GroupType } = params
  console.log(state)
  const { items } = state
  useEffect(() => {
    get(`Tasks?GroupType=${GroupType}`).then(setState)
    return () => setState(state => ({ ...state, items: null }))
  }, [GroupType])

  return (
    <List
      data={items}
      renderItem={item => <div key={item.id}>{item.id}</div>}
    />
  )
}
