import React, { useReducer, useEffect } from "react"
import styled from "styled-components"
import { Input, Row, Col, List } from "antd"
//
import {
  Grid,
  Title,
  Paper,
  Text,
  Tab,
  TabMenu,
  Select
} from "../../components"

import { TaskItemList } from "./TaskItemList"
import { initialState, reducer } from "./store"
import { useAxios } from "../../hooks"
// fakedata
// import { tasks } from "../../../fakeData"

const { Search } = Input

const options = [
  { key: "5", icon: "max", label: "дате создания" },
  { key: "2", icon: "min", label: "дате создания" },
  { key: "3", icon: "max", label: "времени на задачу" },
  { key: "4", icon: "min", label: "времени на задачу" }
]

export const Task = () => {
  const [{ items, tabUrl, totalTaskCount }, dispatch] = useReducer(
    reducer,
    initialState
  )
  const { get, loader } = useAxios(dispatch)

  useEffect(() => {
    let unmount = false
    if (!unmount) {
      get(`Tasks?GroupType=${tabUrl}`).then(res => {
        dispatch({ type: "ADD_STATE", payload: res })
      })
      return () => (unmount = true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabUrl])

  return (
    <Grid pt="24px">
      <Title weight={300}>Задачи</Title>
      <Paper>
        <TabMenu
          getActiveTab={key => dispatch({ type: "CHANGE_TAB", payload: key })}
        >
          <Tab
            title={
              !totalTaskCount
                ? "К исполнению"
                : `К исполнению (${totalTaskCount})`
            }
            id="Executing"
          />
          <Tab title="Наблюдаемые" id="Observing" />
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
          loading={loader}
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <TaskItemList {...item} tabUrl={tabUrl} />
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
