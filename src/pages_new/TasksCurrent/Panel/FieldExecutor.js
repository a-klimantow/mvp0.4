import React, { useState } from "react"
import { useRouteMatch } from "react-router-dom"

import { Select, Text } from "../../../components"
import { useAxios } from "../../../hooks"

export const FieldExecutor = () => {
  const { url } = useRouteMatch()
  const { get } = useAxios()
  const [employees, setEmployees] = useState([])

  return (
    <div>
      <Text>Исполнитель</Text>
      <Select
        labelInValue
        style={{ display: "block", marginTop: 8 }}
        size="large"
        options={employees}
        placeholder="Выбирите исполнителя"
        onChange={e => setNextPerpetratorId(e.key)}
      />
    </div>
  )
}
