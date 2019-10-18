import React, { useContext } from "react"
import styled from "styled-components"
import { Button, Spin } from "antd"
import { useLocation } from "react-router-dom"

import { Icon as icon } from "../../../components"
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
    <PanelWrap className="panel">
      <Button size="large">
        <IconBtn type="upload" />
        Загрузить Акт
      </Button>
      <Button size="large" type="primary" style={{ marginLeft: 16 }}></Button>
    </PanelWrap>
  )
}

const PanelWrap = styled.div`
  .admin {
    margin-top: 8px;
    display: flex;
    .select {
      flex-grow: 1;
    }
  }
`

const IconBtn = styled(icon)`
  margin-right: 8px;
  transform: translateY(3px);
`
