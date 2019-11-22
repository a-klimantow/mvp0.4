import React from "react"

import { Block, Input } from "components"
import { useTasksPageContext } from "../../useTasksPageContext"

export const Observer = () => {
  const { state } = useTasksPageContext()
  const { perpetrator } = state
  return (
    <Block mb="24px">
      <Input
        defaultValue={!!perpetrator ? perpetrator.name : ""}
        disabled
        size="big"
      />
    </Block>
  )
}
