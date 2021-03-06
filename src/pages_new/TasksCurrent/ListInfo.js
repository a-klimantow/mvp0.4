import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// import infoList from "./info.json"
import { Ul, ListEl as li, Text, CustomLink } from "../../components"
import { TasksCurrentContext } from "./context"
import { dateFormat } from "../../services/dateFormat"

export const ListInfo = () => {
  const { state } = useContext(TasksCurrentContext)
  const {
    address,
    number,
    creationTime,
    housingStockId,
    malfunctionType
  } = state

  return (
    <Ul>
      {malfunctionType && (
        <Li>
          <Text view="second">Тип неисправности</Text>
          <TextWarning>{malfunctionType}</TextWarning>
        </Li>
      )}
      <Li>
        <Text view="second">Адрес</Text>
        <CustomLink to={`/objects/${housingStockId}`} type="text">
          {address}
        </CustomLink>
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

const TextWarning = styled(Text)`
  color: ${p => p.theme.color.error};
`
