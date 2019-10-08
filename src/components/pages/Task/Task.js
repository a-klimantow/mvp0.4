import React from 'react'
import styled from 'styled-components'
import { Input, Row, Col, List } from 'antd'
//
import { Grid, Title, Paper, Text } from '../../atoms'
import { Tab, TabMenu, Select } from '../../organisms'
import { TaskItemList } from './TaskItemList'
// fakedata
import { tasks } from '../../../fakeData'

const { Search } = Input

const options = [
  { key: '5', icon: 'max', label: 'дате создания' },
  { key: '2', icon: 'min', label: 'дате создания' },
  { key: '3', icon: 'max', label: 'времени на задачу' },
  { key: '4', icon: 'min', label: 'времени на задачу' }
]

export const Task = () => {
  return (
    <Grid pt="24px">
      <Title weight={300}>Задачи</Title>
      <Paper>
        <TabMenu getActiveTab={key => console.log(1)}>
          <Tab title="Активные" id="1" />
          <Tab title="Архив" id="2" />
        </TabMenu>
        <SortPanel type="flex" justify="space-between">
          <Col span={12}>
            <Search placeholder="Введите номер задачи или адрес" />
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Text view="second">Сортировать по:</Text>
            <Select
              style={{ width: 200 }}
              options={options}
              onChange={e => console.log(e)}
              defaultValue={{ key: '5' }}
              labelInValue
            />
          </Col>
        </SortPanel>
        <List
          itemLayout="horizontal"
          dataSource={tasks}
          renderItem={item => (
            <List.Item>
              <TaskItemList {...item} />
            </List.Item>
          )}
        />
      </Paper>
    </Grid>
  )
}

const SortPanel = styled(Row)`
  margin-top: ${p => p.theme.space.l};
  margin-bottom: ${p => p.theme.space.xl};
  ${Text} {
    margin-right: 8px;
  }
`
