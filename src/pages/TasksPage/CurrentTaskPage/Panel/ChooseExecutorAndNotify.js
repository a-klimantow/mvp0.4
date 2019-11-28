import React, { useContext } from "react"

import { CurrentTaskPageContext } from "context"
import { Input, Label, Button, Row, Block } from "components"
import { SelectWithQuery } from "./elements"

export const ChooseExecutorAndNotify = () => {
  const { state, updateState } = useContext(CurrentTaskPageContext)
  const { nextPerpetratorId, contractorsIds, loading } = state

  return (
    <Block>
      <Row grid="1fr 1fr">
        <SelectWithQuery
          label="Исполнитель"
          placeholder="Выбирете исполнителя"
          watch="users"
          url="ManagingFirmUsers"
          getId={id => updateState({ nextPerpetratorId: id })}
        />
        <SelectWithQuery
          label="Исполнитель"
          placeholder="Выбирете исполнителя"
          watch="contractors"
          url="Contractors"
          getId={id =>
            updateState({
              contractorsIds: [id]
            })
          }
        />
      </Row>
      <Row grid="1fr auto auto" align="end">
        <Label label="Текст пригласительного письма">
          <Input size="big" />
        </Label>
        <Button size="big">Выбрать из шаблона</Button>
        <Button
          size="big"
          view="primary"
          disabled={!nextPerpetratorId || !contractorsIds}
          loading={loading}
          onClick={() =>
            updateState({
              postData: {
                nextPerpetratorId,
                contractorsIds
              }
            })
          }
        >
          Завершить этап
        </Button>
      </Row>
    </Block>
  )
}
