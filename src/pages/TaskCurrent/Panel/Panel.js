import React, { useContext } from "react"
import { Spin, Input, Button } from "antd"
import { useRouteMatch } from "react-router-dom"

import { Context } from "../context"
import { Block } from "../../../components"
import { useAxios } from "../../../hooks"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { ChooseExecutor } from "./ChooseExecutor"
import { UploadDocument } from "./UploadDocument"
import { Switch } from "./Switch"

export const Panel = () => {
  const { url } = useRouteMatch()
  const { post } = useAxios()
  const { state, updateState } = useContext(Context)
  console.log(state)
  const {
    isResponsible,
    userOperatingStatus,
    currentStage = {},
    closingTime
  } = state

  const pushStage = (data = {}) => {
    post(`${url}/PushStage`, data).then(updateState)
  }

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
          {currentStage.action === "UploadDocument" && (
            <UploadDocument pushStage={pushStage} />
          )}
          {currentStage.action === "Switch" && <Switch pushStage={pushStage} />}
          {currentStage.action === "Completion" && (
            <Button type="primary" size="large" onClick={pushStage}>
              Завершить этап
            </Button>
          )}
          {currentStage.action === "ChooseExecutor" && (
            <ChooseExecutor pushStage={pushStage} />
          )}
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

  if (userOperatingStatus === "Executor") {
    return (
      <Block>
        {currentStage.action === "UploadDocument" && (
          <UploadDocument pushStage={pushStage} />
        )}
      </Block>
    )
  } else {
    return (
      <Block>
        <Input disabled size="large" defaultValue={currentStage.perpetrator} />
      </Block>
    )
  }
}
