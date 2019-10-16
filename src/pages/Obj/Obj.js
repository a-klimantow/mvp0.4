import React from 'react'
import styled from 'styled-components'
import { Row, Col, Input } from 'antd'
import { useHistory } from 'react-router-dom'

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
} from '../../components'

const { Search } = Input

const options = [
  { key: '1', icon: 'max', label: 'количество задач' },
  { key: '2', icon: 'min', label: 'количество задач' }
]

export const Obj = () => {
  const { push } = useHistory()
  return (
    <Grid pt="24px">
      <Title weight={300}>Объекты</Title>
      <Paper>
        <Row>
          <Col span={12}>
            <Search placeholder="Введите адрес объекта, номер прибора или ФИО собственника" />
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Text view="second" mr="8px">
              Сортировать по:
            </Text>
            <Select
              style={{ width: 200 }}
              options={options}
              onChange={e => console.log(e)}
              defaultValue={{ key: '1' }}
              labelInValue
            />
          </Col>
        </Row>
        <Ul>
          <ListEl onClick={() => push('/object/1')}>
            <div className="el_title">
              <Title level={4} weight={600}>
                Чишемале, 3
              </Title>
            </div>
            <Address address="Нижнекамск" />
            <DeviceCounter />
            <TaskCounter />
          </ListEl>
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
  div.el_title {
    justify-self: start;
  }
`
