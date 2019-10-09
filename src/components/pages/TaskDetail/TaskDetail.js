import React, { useReducer, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button, List } from 'antd'
//
import { Grid, Title, Text, Paper, Icon as icon } from '../../atoms'
import { Comments, ListInfo, ListDevice } from '../../organisms'
import { dateFormat } from '../../../services/dateFormat'

import { initialState, reducer } from './store'
import { useAxios, useTimer } from '../../../hooks'

export const Taskdetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { get, loader } = useAxios()
  const { id } = useParams()
  const { goBack } = useHistory()
  const timer = useTimer(state.expectedCompletionTime, {
    text: 'Времени на этап:'
  })
  console.log(state)

  useEffect(() => {
    get(id).then(res => dispatch({ type: 'ADD_STATE', payload: res }))
  }, [])

  return (
    <Grid grid="1" p="16px 0">
      <div className="crumbs">
        <Button style={{ padding: '0 4px 0 0' }} type="link" onClick={goBack}>
          Задачи /
        </Button>
        <Text>{state.currentStageName}</Text>
      </div>
      <div className="title">
        <Title weight={300} mb="8px">
          {state.currentStageName}
        </Title>
        <Text view="second">{state.name}</Text>
      </div>
      <div className="panel">
        <Button size="large">
          <IconBtn type="upload" />
          Загрузить Акт
        </Button>
        <Button disabled size="large" style={{ marginLeft: 16 }}>
          Завершить этап
        </Button>
        <div style={{ marginTop: 8 }}>
          <Text>{timer}</Text>{' '}
          <Text view="second" size="small">
            ({dateFormat(state.expectedCompletionTime, 'DD.MM.YY')})
          </Text>
        </div>
      </div>
      <Comments />
      <Paper className="info">
        <ListInfo {...state} mb="24px" />
        <ListDevice {...state.device} />
      </Paper>
      <Paper className="r_block">right block</Paper>
    </Grid>
  )
}

const IconBtn = styled(icon)`
  margin-right: 8px;
  transform: translateY(3px);
`
