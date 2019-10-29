import React, { useContext, useState } from "react"
import { Button } from "antd"
import { useRouteMatch } from "react-router-dom"

import { Paper, Title, Ul } from "../../../components"
import { Modal } from "./Modal"
import { StageItem } from "./StageItem"
import { Context } from "../context"
import { useAxios } from "../../../hooks"

export const Stages = () => {
  const { state, updateState } = useContext(Context)
  const { post } = useAxios()
  const { url } = useRouteMatch()
  const { stages, currentStage, userOperatingStatus } = state
  const [visible, setVisible] = useState(false)
  const [comment, setComment] = useState("")
  const lenStg = stages.length

  const revertStage = () => {
    post(`${url}/RevertStage`, { comment })
      .then(updateState)
      .finally(() => setVisible(false))
  }

  return (
    <Paper className="r_block">
      <Modal
        visible={visible}
        okText="Вернуть"
        onOk={revertStage}
        onCancel={() => setVisible(false)}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Title level={3} mb="16px">
        Этапы выполнения
      </Title>
      <Ul>
        {stages &&
          stages.map((stage, i) => {
            if (
              currentStage.number - 1 === i &&
              userOperatingStatus === "Executor"
            ) {
              return (
                <StageItem key={stage.id} {...stage} length={lenStg}>
                  <Button
                    size="small"
                    onClick={() => setVisible(true)}
                    style={{ marginTop: 8 }}
                  >
                    Вернуть этап
                  </Button>
                </StageItem>
              )
            }
            return <StageItem key={stage.id} {...stage} length={lenStg} />
          })}
      </Ul>
    </Paper>
  )
}
