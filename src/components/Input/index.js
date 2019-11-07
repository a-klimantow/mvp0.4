import React from "react"
import { Input as InputAntd } from "antd"
import styled from "styled-components"
import { Text as text } from "../Typography"
import { Label } from "../Label"

export const Input = ({ label, mb, password, ...props }) => {
  if (label) {
    return (
      <Label mb={mb}>
        <Text>{label}</Text>
        {password ? (
          <InputAntd.Password {...props} />
        ) : (
          <InputAntd {...props} />
        )}
      </Label>
    )
  }

  return <InputAntd {...props} />
}

const Text = styled(text).attrs({
  view: "second",
  size: "small"
})`
  margin-bottom: 8px;
`
