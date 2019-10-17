import React, { useContext } from "react"
import styled from "styled-components"
import { Button, Spin } from "antd"

import { Icon as icon, Select, Text } from "../../components"
import { TaskDetailContext } from "./store"
import { ChooseExecutor } from "./ChooseExecutor"
import { ChooseExecutorAndNotify } from "./ChooseExecutorAndNotify"
import { ChooseExecutorAndAction } from "./ChooseExecutorAndAction"
import { UploadDocument } from "./UploadDocument"

export const Panel = () => {
  const {
    state: {
      userOperatingStatus,
      isResponsible,
      employees,
      currentStage,
      NextPerpetratorId
    },
    dispatch,
    pushStage
  } = useContext(TaskDetailContext)
  // let currentStageAction = currentStage.action
  // console.log(currentStageAction)
  const status = userOperatingStatus === "Observer"

  if (isResponsible === null) {
    return (
      <PanelWrap className="panel">
        <Spin />
      </PanelWrap>
    )
  }

  if (isResponsible) {
    return (
      // <PanelWrap className="panel">
      //   <div>
      //     <Text size="small" view="second">
      //       Исполнитель :
      //     </Text>
      //   </div>
      //   <div className="admin">
      //     <div className="select">
      //       <Select
      //         style={{ width: "100%" }}
      //         placeholder="Выбирите исполнителя"
      //         size="large"
      //         labelInValue
      //         options={employees}
      //         onChange={e =>
      //           dispatch({ type: "SET_NEXT_PERPETRATOR_ID", payload: e.key })
      //         }
      //       />
      //     </div>
      //     {!status && (
      //       <div>
      //         <Button
      //           type="primary"
      //           style={{ marginLeft: 16 }}
      //           size="large"
      //           disabled={!NextPerpetratorId}
      //           onClick={pushStage}
      //         >
      //           Завершить этап
      //         </Button>
      //       </div>
      //     )}
      //   </div>
      // </PanelWrap>
      <div className="panel">
        {currentStage.action === "ChooseExecutor" && <ChooseExecutor />}
        {currentStage.action === "ChooseExecutorAndNotify" && (
          <ChooseExecutorAndNotify />
        )}
        {currentStage.action === "ChooseExecutorAndAction" && (
          <ChooseExecutorAndAction />
        )}
        {currentStage.action === "UploadDocument" && <UploadDocument />}
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
