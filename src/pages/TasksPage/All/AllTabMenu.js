import React from "react"

import { TabMenu } from "components"
import { useTasksPageContext } from "../useTasksPageContext"

export const AllTabMenu = () => {
  const { state, changeTab } = useTasksPageContext()
  const {
    archivedTasksCount,
    executingTasksCount,
    observingTasksCount,
    search
  } = state

  const toggleActiveClass = name => (search === name ? "active" : "")

  return (
    <TabMenu>
      <button
        onClick={changeTab}
        data-name="Executing"
        className={toggleActiveClass("Executing")}
      >
        {executingTasksCount
          ? `К исполнению (${executingTasksCount})`
          : "К исполнению"}
      </button>
      <button
        onClick={changeTab}
        data-name="Observing"
        className={toggleActiveClass("Observing")}
      >
        {executingTasksCount
          ? `Наблюдаемые (${observingTasksCount})`
          : "Наблюдаемые"}
      </button>
      <button
        onClick={changeTab}
        data-name="Archived"
        className={toggleActiveClass("Archived")}
      >
        {executingTasksCount ? `Архивные (${archivedTasksCount})` : "Архивные"}
      </button>
    </TabMenu>
  )
}
