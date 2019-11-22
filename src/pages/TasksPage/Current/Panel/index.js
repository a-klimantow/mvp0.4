import React, { useEffect } from "react"

// import { Block } from "components"
import { useTasksPageContext } from "../../useTasksPageContext"
import { Observer } from "./Observer"
// import { ChooseExecutor } from "./ChooseExecutor"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
// import { ChooseExecutorAndSwitch } from "./ChooseExecutorAndSwitch"

export const Panel = () => {
  const { state, updateState } = useTasksPageContext()
  const { userOperatingStatus, currentStage } = state

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => updateState({ userOperatingStatus: null }), [])

  if (state.closingTime) return null

  if (userOperatingStatus === "Observer") return <Observer />
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
