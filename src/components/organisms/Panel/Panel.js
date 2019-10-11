import React from "react"
import styled from "styled-components"
import { Button } from "antd"

import { Text, Icon as icon } from "../../atoms"
import { dateFormat } from "../../../services/dateFormat"
import { useTimer, useAxios } from "../../../hooks"

export const Panel = ({ expectedCompletionTime, isPauk, taskId }) => {
  const timer = useTimer(expectedCompletionTime, {
    text: "Времени на этап:"
  })
  const { post } = useAxios()

  const pushStage = () => {
    post(taskId)
  }

  return (
    <div className="panel">
      {isPauk ? (
        <>
          <Button size="large">
            <IconBtn type="upload" />
            Загрузить Акт
          </Button>
          <Button
            size="large"
            type="primary"
            style={{ marginLeft: 16 }}
            onClick={pushStage}
          >
            Завершить этап
          </Button>
          <div style={{ marginTop: 8 }}>
            <Text>{timer}</Text>{" "}
            <Text view="second" size="small">
              ({dateFormat(expectedCompletionTime, "DD.MM.YY")})
            </Text>
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

const IconBtn = styled(icon)`
  margin-right: 8px;
  transform: translateY(3px);
`
