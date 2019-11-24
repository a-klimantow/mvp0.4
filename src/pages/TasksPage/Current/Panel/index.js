import React, { useEffect } from "react"

// import { Block } from "components"
import { useTasksPageContext } from "../../useTasksPageContext"
import { Observer } from "./Observer"
// import { ChooseExecutor } from "./ChooseExecutor"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
// import { ChooseExecutorAndSwitch } from "./ChooseExecutorAndSwitch"

export const Panel = ({ state }) => {
  const { userOperatingStatus, currentStage, perpetrator } = state

  if (state.closingTime) return null

  if (userOperatingStatus === "Observer")
    return <Observer perpetrator={perpetrator} />
  if (userOperatingStatus === "Executor") {
    switch (currentStage.action) {
      case "ChooseExecutorAndNotify":
        return <ChooseExecutorAndNotify />

      default:
        console.log(currentStage.action)
        return null
    }
  }

  return <div>loader</div>
}
