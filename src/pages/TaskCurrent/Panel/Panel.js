import React, { useContext, useState } from "react"
import { Spin, Input, Button } from "antd"
import { useRouteMatch } from "react-router-dom"

import { Context } from "../context"
import { Block } from "../../../components"
import { useAxios } from "../../../hooks"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { ChooseExecutor } from "./ChooseExecutor"
import { UploadDocument } from "./UploadDocument"
import { Switch } from "./Switch"
import { ChooseExecutorAndSwitch } from "./ChooseExecutorAndSwitch"

export const Panel = () => {
  const { url } = useRouteMatch()
  const { post } = useAxios()
  const { state, updateState } = useContext(Context)
  const [loading, setLoading] = useState(false)
  // console.log(state)
  const {
    isResponsible,
    userOperatingStatus,
    currentStage = {},
    closingTime
  } = state

  const pushStage = (data = {}) => {
    setLoading(true)
    post(`${url}/PushStage`, data)
      .then(updateState)
      .finally(() => setLoading(false))
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
            // <ChooseExecutorAndNotify pushStage={pushStage} loading={loading} />
            <ChooseExecutorAndSwitch pushStage={pushStage} loading={loading} />
          )}
          {currentStage.action === "UploadDocument" && (
            <UploadDocument pushStage={pushStage} loading={loading} />
          )}
          {currentStage.action === "Switch" && <Switch pushStage={pushStage} />}
          {currentStage.action === "Completion" && (
            <Button
              type="primary"
              size="large"
              onClick={pushStage}
              loading={loading}
            >
              Завершить этап
            </Button>
          )}
          {currentStage.action === "ChooseExecutor" && (
            <ChooseExecutor pushStage={pushStage} loading={loading} />
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
          <UploadDocument pushStage={pushStage} loading={loading} />
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
