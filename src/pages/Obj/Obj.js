import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Row, Col, Input, Empty } from "antd"
import { useHistory } from "react-router-dom"

import {
  Grid,
  Title,
  Paper,
  Text,
  Select,
  Ul,
  Address,
  DeviceCounter,
  TaskCounter
} from "../../components"

import { useAxios } from "../../hooks"

const { Search } = Input

const options = [
  { key: "1", icon: "max", label: "количество задач" },
  { key: "2", icon: "min", label: "количество задач" }
]

export const Obj = () => {
  const {
    push,
    location: { pathname }
  } = useHistory()
  const { get, source } = useAxios()
  const [houses, setHouses] = useState(null)

  useEffect(() => {
    get(pathname).then(res => setHouses(res))
    return () => source.cancel("cancel axios")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Grid pt="24px">
      <Title weight={300}>Объекты</Title>
      <Paper>
        <Row>
          <Col span={12}>
            <Search placeholder="Введите адрес объекта, номер прибора или ФИО собственника" />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
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
          </Col>
        </Row>
        <Ul mt="16px">
          {!houses && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          {houses &&
            houses.map(({id, street, number, city, numberOfTasks}) => (
              <ListEl
                onClick={() => push(`${pathname}/${id}`, {street})}
                key={id}
              >
                <div className="el_title-block">
                  <Title level={4} weight={600} className="el_title">
                    {street}, {number}
                  </Title>
                </div>
                <Address address={city} />
                <DeviceCounter />
                {numberOfTasks !== 0 && (
                  <TaskCounter count={numberOfTasks} />
                )}
              </ListEl>
            ))}
        </Ul>
      </Paper>
    </Grid>
  )
}

const ListEl = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  padding: 24px 0;
  border-bottom: ${p => p.theme.border};
  justify-items: end;
  cursor: pointer;
  div.el_title-block {
    justify-self: start;
  }

  .el_title {
    transition: color 0.3s;
  }

  &:hover {
    .el_title {
      color: ${p => p.theme.color.primary};
    }
  }
`
