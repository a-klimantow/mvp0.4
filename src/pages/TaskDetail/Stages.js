import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Button } from "antd"

import { Paper, Title, Ul, Icon as icon } from "../../components"
import { dateFormat } from "../../services/dateFormat"
import { Modal } from "./Modal"

import { TaskDetailContext } from "./store"

export const Stages = () => {
  const {
    state: { stages, userOperatingStatus, modal, currentStage },
    showModal
  } = useContext(TaskDetailContext)

  const lenStg = stages && stages.length
  const currentNumber = currentStage && currentStage.number

  return (
    <Paper className="r_block">
      <Modal visible={modal} />
      <Title level={3} mb="16px">
        Этапы выполнения
      </Title>
      <Ul>
        {stages &&
          stages.map((stage, i) => {
            if (currentNumber - 1 === i && userOperatingStatus === "Executor") {
              return (
                <Stage key={stage.id} {...stage} length={lenStg}>
                  <Button
                    size="small"
                    onClick={showModal}
                    style={{ marginTop: 8 }}
                  >
                    Вернуть этап
                  </Button>
                </Stage>
              )
            }
            return <Stage key={stage.id} {...stage} length={lenStg} />
          })}
      </Ul>
    </Paper>
  )
}

const Stage = ({
  length,
  status,
  number,
  name,
  perpetrator,
  closingTime,
  children,
  type
}) => (
  <StageEl status={status}>
    {number < length - 1 && <Line />}
    <IndexStage>
      {status === "Done" ? (
        <IconOk />
      ) : type === "Switch" ? (
        <IconSwitch />
      ) : (
        number + 1
      )}
    </IndexStage>
    <div className="title">{name}</div>
    {status === "Done" && (
      <div className="text">
        {perpetrator} {dateFormat(closingTime, "DD.MM.YY HH:mm")}
      </div>
    )}
    {children}
  </StageEl>
)

const StageEl = styled.li`
  position: relative;
  padding-left: 40px;
  padding-bottom: 16px;
  margin-bottom: 6px;
  font-size: 12px;
  line-height: 20px;
  min-height: 50px;

  div.title {
    color: ${p => p.theme.text.color.primary};
    font-size: 14px;
    line-height: 22px;
  }

  div.text {
    color: ${p => p.theme.text.color.secondary};
  }

  ${p =>
    p.status === "InProgress" &&
    css`
      div.title {
        color: ${p => p.theme.title.color};
        font-weight: 600;
      }

      ${IndexStage} {
        background-color: ${p => p.theme.color.primary};
        border-color: ${p => p.theme.color.primary};
        color: #fff;
      }

      ${Line} {
        background-color: ${p => p.theme.color.primary};
      }
    `}

  ${p =>
    p.status === "Done" &&
    css`
      div.title {
        color: ${p => p.theme.title.color};
      }

      ${IndexStage} {
        color: ${p => p.theme.color.primary};
        border-color: ${p => p.theme.color.primary};
      }

      ${Line} {
        background-color: ${p => p.theme.color.primary};
      }
    `}
`

const IndexStage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${p => p.theme.text.color.disable};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${p => p.theme.text.color.disable};
`
const IconOk = styled(icon).attrs({
  type: 'ok'
})`
  transform: translateY(1px);
`

const IconSwitch = styled(icon).attrs({
  type: 'switch'
})`

`


const Line = styled.div`
  width: 2px;
  height: calc(100% - 30px);
  background-color: ${p => p.theme.text.color.disable};
  position: absolute;
  left: 11px;
  bottom: 0;
`
