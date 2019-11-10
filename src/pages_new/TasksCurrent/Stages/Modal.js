import React from "react"
import styled from "styled-components"
import { Modal as ModalAnt, Input } from "antd"

import { Text } from "../../../components"

export const Modal = ({ onChange, value, ...props }) => {
  return (
    <ModalAnt {...props}>
      <Text>
        Вы можете оставить комментарий по причине возвращения.
        <br />
        Это позволит оператору понять причину Вашего решения.
      </Text>
      <Label>Текст комментария</Label>
      <Input.TextArea value={value} onChange={onChange} />
    </ModalAnt>
  )
}

const Label = styled(Text).attrs(p => ({
  size: "small",
  view: "second"
}))`
  margin-top: 16px;
  margin-bottom: 8px;
`
