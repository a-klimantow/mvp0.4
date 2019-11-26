import React from "react"

import { Block, Input } from "components"

export const Observer = ({ perpetrator }) => {
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
