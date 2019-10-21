import React, { useContext } from "react"
import { Spin } from "antd"
import { useLocation } from "react-router-dom"

import { TaskDetailContext } from "../store"
import { ChooseExecutor } from "./ChooseExecutor"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { ChooseExecutorAndAction } from "./ChooseExecutorAndAction"
import { UploadDocument } from "./UploadDocument"

export const Panel = () => {
  const {
    state: { currentStageAction }
  } = useContext(TaskDetailContext)

  const {
    state: { isResponsible }
  } = useLocation()

  if (isResponsible) {
    return (
      <div className="panel">
        {currentStageAction === null && <Spin />}
        {currentStageAction === "ChooseExecutor" && <ChooseExecutor />}
        {currentStageAction === "ChooseExecutorAndNotify" && (
          <ChooseExecutorAndNotify />
        )}
        {currentStageAction === "ChooseExecutorAndAction" && (
          <ChooseExecutorAndAction />
        )}
        {currentStageAction === "UploadDocument" && <UploadDocument />}
      </div>
    )
  }

  return (
    <div className="panel">
      <UploadDocument />
    </div>
  )
}
