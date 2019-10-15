import React, { useContext } from "react"
import { Steps, Button } from "antd"
import styled from "styled-components"

import { Paper as paper, Title } from "../../components"
import { dateFormat } from "../../services/dateFormat"
import { TaskDetailContext } from "./store"

const { Step } = Steps

export const Stages = ({ stages = [] }) => {
  const {
    state: { userOperatingStatus },
    revertStage
  } = useContext(TaskDetailContext)
  return (
    <Paper className="r_block">
      <Title level={4} mb="16px">
        Этапы выполнения
      </Title>
      <Steps direction="vertical">
        {stages.map(
          ({ id, name, perpetrator, status, closingTime, number }, i) => (
            <Step
              key={id}
              title={<span className="title">{name}</span>}
              description={
                <div className="body">
                  {perpetrator}
                  <span className="timeCreate">
                    {closingTime && dateFormat(closingTime, "DD.MM.YYYY HH:mm")}
                  </span>
                  {userOperatingStatus === "Executor" ? (
                    <div className="button">
                      <Button size="small" onClick={revertStage}>
                        Вернуть задачу
                      </Button>
                    </div>
                  ) : null}
                </div>
              }
              status={
                status === "InProgress"
                  ? "process"
                  : status === "Done"
                  ? "finish"
                  : "wait"
              }
            />
          )
        )}
      </Steps>
    </Paper>
  )
}

const Paper = styled(paper)`
  span.title {
    font-size: 14px;
    line-height: 22px;
  }

  div.body {
    color: ${p => p.theme.text.color.primary};
    font-size: 12px;
    line-height: 20px;
  }
  span.timeCreate {
    margin-left: 16px;
  }

  div.button {
    margin-top: 8px;
  }
`
