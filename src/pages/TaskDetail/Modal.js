import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Modal as ModalAnt, Input } from "antd"

import { Text } from "../../components"
import { TaskDetailContext } from "./store"

export const Modal = ({ visible }) => {
  const [value, setValue] = useState("")
  const { revertStage, showModal, addComment } = useContext(TaskDetailContext)

  const handleOk = () => {
    revertStage()
    showModal()
    addComment(value)
    setValue("")
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <ModalAnt
      visible={visible}
      title="Возвращение задачи"
      okText="Вернуться"
      centered
      onOk={handleOk}
      onCancel={showModal}
    >
      <Text>
        Вы можете оставить комментарий по причине возвращения.
        <br />
        Это позволит оператору понять причину Вашего решения.
      </Text>
      <Label>Текст комментария</Label>
      <Input.TextArea value={value} onChange={handleChange} />
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
