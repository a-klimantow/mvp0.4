import React, { useContext } from "react"
import { Spin, Input } from "antd"

import { TasksCurrentContext } from "../context"
import { Block } from "../../../components"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { ChooseExecutor } from "./ChooseExecutor"
import { UploadDocument } from "./UploadDocument"
import { Switch } from "./Switch"
import { ChooseExecutorAndSwitch } from "./ChooseExecutorAndSwitch"
import { PushStateButton } from "./PushStageButton"

export const Panel = () => {
  const { state } = useContext(TasksCurrentContext)

  const {
    isResponsible,
    userOperatingStatus,
    currentStage = {},
    closingTime
  } = state

  // console.log(state)

  if (isResponsible === undefined)
    return (
      <Block>
        <Spin />
      </Block>
    )

  if (closingTime) return null

  if (isResponsible) {
    if (userOperatingStatus === "Executor") {
      return (
        <Block>
          {currentStage.action === "ChooseExecutorAndNotify" && (
            <ChooseExecutorAndNotify />
          )}
          {currentStage.action === "ChooseExecutorAndSwitch" && (
            <ChooseExecutorAndSwitch />
          )}
          {currentStage.action === "UploadDocument" && <UploadDocument />}
          {currentStage.action === "Switch" && <Switch />}
          {currentStage.action === "ChooseExecutor" && <ChooseExecutor />}
          {currentStage.action === "Completion" && <PushStateButton />}
        </Block>
      )
    }
    return (
      <Block>
        <Input disabled size="large" defaultValue={'Исполнитель Е.'} />
      </Block>
    )
  }

  if (userOperatingStatus === "Executor") {
    return (
      <Block>
        {currentStage.action === "UploadDocument" && <UploadDocument />}
      </Block>
    )
  } else {
    return (
      <Block>
        <Input disabled size="large" defaultValue={"Администратор Е."} />
      </Block>
    )
  }
}
