import React, { Children } from "react"
import styled from "styled-components"

import { Text as text } from "../../../components"

export const Label = ({ children, label }) => {
  return (
    <LabelInput>
      {label && <Text>{label}</Text>}
      {Children.only(children)}
    </LabelInput>
  )
}

const Text = styled(text).attrs({
  size: "small",
  view: "second"
})`
  margin-bottom: 8px;
`

const LabelInput = styled.label``
