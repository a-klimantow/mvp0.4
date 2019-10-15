import React from "react"

import { dateFormat } from "../services/dateFormat"
import { ListEl } from "./ListEl"
import { Ul } from "./Ul"
import { Text } from "./Text"
import { Title } from "./Title"

export const ListInfo = ({ address, number, creationTime, ...props }) => (
  <>
    <Title level={3} mb="16px">
      Информация о задаче
    </Title>
    <Ul {...props}>
      {/* <ListEl>
      <div>
        <Text view="second">Тип неисправности</Text>
      </div>
      <div>
        <Text>null</Text>
      </div>
    </ListEl> */}
      <ListEl>
        <div>
          <Text view="second">Адрес</Text>
        </div>
        <div>
          <Text>{address}</Text>
        </div>
      </ListEl>
      <ListEl>
        <div>
          <Text view="second">Номер задачи</Text>
        </div>
        <div>
          <Text>{number}</Text>
        </div>
      </ListEl>
      <ListEl>
        <div>
          <Text view="second">Дата создания задачи</Text>
        </div>
        <div>
          <Text>{dateFormat(creationTime, "DD.MM.YYYY HH:mm")}</Text>
        </div>
      </ListEl>
    </Ul>
  </>
)
