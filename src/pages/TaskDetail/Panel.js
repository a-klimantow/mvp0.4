import React, { useContext } from "react"
import styled from "styled-components"
import { Button, Spin } from "antd"

import { Icon as icon, Select, Text } from "../../components"
import { TaskDetailContext } from "./store"

export const Panel = () => {
  const { state, dispatch, pushStage } = useContext(TaskDetailContext)

  const status = state.userOperatingStatus === "Observer"

  if (state.isResponsible === null) {
    return (
      <PanelWrap className="panel">
        <Spin />
      </PanelWrap>
    )
  }

  if (state.isResponsible) {
    return (
      <PanelWrap className="panel">
        <div>
          <Text size="small" view="second">
            Исполнитель :
          </Text>
        </div>
        <div className="admin">
          <div className="select">
            <Select
              style={{ width: "100%" }}
              placeholder="Выбирите исполнителя"
              size="large"
              labelInValue
              defaultValue={{ key: "Исполнитель" }}
              options={state.employees}
              disabled={status}
              onChange={e =>
                dispatch({ type: "SET_NEXT_PERPETRATOR_ID", payload: e.key })
              }
            />
          </div>
          {!status && (
            <div>
              <Button
                type="primary"
                style={{ marginLeft: 16 }}
                size="large"
                disabled={!state.NextPerpetratorId}
                onClick={pushStage}
              >
                Завершить этап
              </Button>
            </div>
          )}
        </div>
      </PanelWrap>
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
