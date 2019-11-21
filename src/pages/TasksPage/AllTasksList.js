import React from "react"
import { useHistory } from "react-router-dom"

import { Li } from "components"
import { useTasksPageContext } from "./useTasksPageContext"

export const AllTasksList = () => {
  const { state } = useTasksPageContext()
  const { items } = state
  const { push } = useHistory()
  return (
    <ul>
      {items &&
        items.map(item => (
          <Li key={item.id} onClick={() => push(item.url)}>
            {item.name}
          </Li>
        ))}
    </ul>
  )
}
