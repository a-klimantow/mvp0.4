import React from "react"
import * as Component from "components"

export const useCreateComponent = data => {
  const { Type, props } = data
  const Res = Component[Type]
  console.log(Res)
  return <Res {...props} />
}
