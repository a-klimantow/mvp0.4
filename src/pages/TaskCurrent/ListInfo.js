import React, { useContext } from "react"
import styled from "styled-components"

// import infoList from "./info.json"
import { Ul, ListEl as li, Text } from "../../components"
import { Context } from "./context"
import { dateFormat } from "../../services/dateFormat"

export const ListInfo = () => {
  const { state } = useContext(Context)
  const { address, number, creationTime } = state

  return (
    <Ul>
      <Li>
        <Text view="second">Адрес</Text>
        <Text>{address}</Text>
      </Li>
      <Li>
        <Text view="second">Номер задачи</Text>
        <Text>{number}</Text>
      </Li>
      <Li>
        <Text view="second">Дата создания задачи</Text>
        <Text>{dateFormat(creationTime, "DD.MM.YYYY HH:mm")}</Text>
      </Li>
    </Ul>
  )
}

const Li = styled(li)`
  & > * {
    width: 50%;
  }
`
