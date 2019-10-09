import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import { Input, Row, Col, List } from 'antd'
import { useHistory } from 'react-router-dom'
//
import { Grid, Title, Paper, Text } from '../../atoms'
import { Tab, TabMenu, Select } from '../../organisms'
import { TaskItemList } from './TaskItemList'
import { initialState, reducer } from './store'
import { useAxios } from '../../../hooks'
// fakedata
// import { tasks } from "../../../fakeData"

const { Search } = Input

const options = [
  { key: '5', icon: 'max', label: 'дате создания' },
  { key: '2', icon: 'min', label: 'дате создания' },
  { key: '3', icon: 'max', label: 'времени на задачу' },
  { key: '4', icon: 'min', label: 'времени на задачу' }
]

export const Task = () => {
  const [{ items, totalTaskCount }, dispatch] = useReducer(
    reducer,
    initialState
  )
  const { push } = useHistory()
  const { get, loader } = useAxios(dispatch)

  useEffect(() => {
    get().then(res => {
      console.log('get data')
      dispatch({ type: 'ADD_STATE', payload: res })
    })
  }, [])

  return (
    <Grid pt="24px">
      <Title weight={300}>Задачи</Title>
      <Paper>
        <TabMenu getActiveTab={key => console.log(1)}>
          <Tab
            title={
              !totalTaskCount ? 'Активные' : `Активные (${totalTaskCount})`
            }
            id="1"
          />
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
          loading={loader}
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => (
            <List.Item onClick={() => push(`/task/${item.id}`)}>
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
