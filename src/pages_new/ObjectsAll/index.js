import React, { useState} from "react"
import { Input } from "antd"
import styled from "styled-components"

import { useAxios, useEffectOnce } from "../../hooks"
import { Title, Paper, Text, Row as row, Select } from "../../components"
import { ListObject } from "./ListObjects"

const options = [
  { key: "1", icon: "max", label: "количество задач" },
  { key: "2", icon: "min", label: "количество задач" }
]

export const ObjectsAll = () => {
  const { get } = useAxios()
  const [state, setState] = useState(null)

  useEffectOnce(() => {
    get("HousingStocks").then(setState)
  })

  return (
    <>
      <Title weight={300} m="24px 0">
        Объекты
      </Title>
      <Paper>
        <Row>
          <div>
            <Input.Search placeholder="Введите адрес объекта, номер прибора или ФИО собственника" />
          </div>
          <div>
            <Text view="second" mr="8px">
              Сортировать по:
            </Text>
            <Select
              style={{ width: 200 }}
              options={options}
              onChange={e => console.log(e)}
              defaultValue={{ key: "1" }}
              labelInValue
            />
          </div>
        </Row>
        <ListObject data={state} />
      </Paper>
    </>
  )
}

const Row = styled(row)`
  & > div {
    width: 50%;
  }
  div:last-of-type {
    text-align: right;
  }
`
