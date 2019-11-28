import React, { useContext } from "react"

import { CurrentTaskPageContext } from "context"
import { Row, Button } from "components"
import { SelectWithQuery } from "./elements"

export const ChooseExecutorAndSwitch = () => {
  const { state, updateState } = useContext(CurrentTaskPageContext)
  const { nextStageId, nextPerpetratorId } = state
  return (
    <>
      <Row grid="1fr 1fr auto" align="end">
        <SelectWithQuery
          label="Исполнитель"
          placeholder="Выбирете исполнителя"
          watch="users"
          url="ManagingFirmUsers"
          getId={id => updateState({ nextPerpetratorId: id })}
        />
        <SelectWithQuery
          label="Этап"
          placeholder="Выбирете дальнейшее действие"
          watch="nextStages"
          url={`/Tasks/${state.params.taskId}/NextStages`}
          getId={id => updateState({ nextStageId: id })}
        />
        <Button
          size="big"
          view="primary"
          disabled={!nextPerpetratorId || !nextStageId}
          onClick={() =>
            updateState({ postData: { nextPerpetratorId, nextStageId } })
          }
        >
          Завершить этап
        </Button>
      </Row>
    </>
  )
}
