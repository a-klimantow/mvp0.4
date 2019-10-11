import React from "react"
import { Steps } from "antd"
import styled from "styled-components"

import { Paper as paper, Title } from "../../atoms"

const { Step } = Steps

export const Stages = ({ stages = [], currentStage }) => {
  return (
    <Paper className="r_block">
      <Title level={4} mb="16px">
        Этапы выполнения
      </Title>
      <Steps direction="vertical" current={currentStage}>
        {stages.map(stage => (
          <Step
            key={stage.id}
            title={<span className="title">{stage.name}</span>}
            description={<div className="body">{stage.perpetrator}</div>}
          />
        ))}
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
`
