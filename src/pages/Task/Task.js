import React, { useReducer, useEffect, useState } from "react"
import styled from "styled-components"
import { Input, Row, Col, List } from "antd"
import { useHistory, Redirect } from "react-router-dom"
//
import {
  Block,
  Title,
  Paper,
  Text,
  Tab,
  TabMenu,
  Select
} from "../../components"

import { TaskItemList } from "./TaskItemList"
import { reducer } from "./store"
import { useAxios } from "../../hooks"

const { Search } = Input

const options = [
  { key: "5", icon: "max", label: "дате создания" },
  { key: "2", icon: "min", label: "дате создания" },
  { key: "3", icon: "max", label: "времени на задачу" },
  { key: "4", icon: "min", label: "времени на задачу" }
]

export const Task = () => {
  const {
    location: { search, pathname },
    push
  } = useHistory()
  const { get, source } = useAxios()
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, null)

  useEffect(() => {
    setLoading(true)
    get(`Tasks${search}`)
      .then(state => dispatch({ type: "GET_STATE", payload: state }))
      .finally(() => setLoading(false))
    return () => source.cancel("task tab cancel")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  let items = state ? state.items : []
  if (!search) {
    return <Redirect to="/Tasks?GroupType=Executing" />
  }

  return (
    <>
      <Block m="24px 0">
        <Title weight={300}>Задачи</Title>
      </Block>
      <Block>
        <Paper>
          <TabMenu
            getActiveTab={id => push(`${pathname}?GroupType=${id}`)}
            defaultActive="Executing"
          >
            <Tab
              title={
                !state
                  ? "К исполнению"
                  : state.executingTasksCount === undefined
                  ? "К исполнению"
                  : `К исполнению (${state.executingTasksCount})`
              }
              id="Executing"
            />
            <Tab
              title={
                !state
                  ? "Наблюдаемые"
                  : state.executingTasksCount === undefined
                  ? "Наблюдаемые"
                  : `Наблюдаемые (${state.observingTasksCount})`
              }
              id="Observing"
            />
            <Tab title="Архив" id="Archived" />
          </TabMenu>
          <SortPanel type="flex" justify="space-between">
            <Col span={12}>
              <Search placeholder="Введите номер задачи или адрес" />
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Text view="second">Сортировать по:</Text>
              <Select
                style={{ width: 200 }}
                options={options}
                onChange={e => console.log(e)}
                defaultValue={{ key: "5" }}
                labelInValue
              />
            </Col>
          </SortPanel>
          <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <TaskItemList {...item} tabUrl={search} />
              </List.Item>
            )}
          />
        </Paper>
      </Block>
    </>
  )
}

const SortPanel = styled(Row)`
  margin-top: ${p => p.theme.space.l};
  margin-bottom: ${p => p.theme.space.xl};
  ${Text} {
    margin-right: 8px;
  }
`
