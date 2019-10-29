import React, { useContext } from "react"
import { Spin, Input } from "antd"

import { Context } from "../context"
import { Block } from "../../../components"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { UploadDocument } from "./UploadDocument"

export const Panel = () => {
  const { state } = useContext(Context)
  console.log(state)
  const { isResponsible, userOperatingStatus, currentStage = {} } = state

  if (isResponsible === undefined)
    return (
      <Block>
        <Spin />
      </Block>
    )

  if (isResponsible) {
    if (userOperatingStatus === "Executor") {
      return (
        <Block>
          {currentStage.action === "ChooseExecutorAndNotify" && (
            <ChooseExecutorAndNotify />
          )}
          {currentStage.action === "UploadDocument" && <UploadDocument />}
        </Block>
      )
    } else {
      return (
        <Block>
          <Input
            disabled
            size="large"
            defaultValue={currentStage.perpetrator}
          />
        </Block>
      )
    }
  }
  return null
}
