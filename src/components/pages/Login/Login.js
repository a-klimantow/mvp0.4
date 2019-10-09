import React, { useReducer } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
//
import { Title, Text } from '../../atoms'
import { logo, sqr_bl, sqr_gr, logo_text } from '../../../assets/img'

import { initialState, reducer } from './store'
import { useAxios } from '../../../hooks'

export const Login = () => {
  const [{ data }, dispatch] = useReducer(reducer, initialState)
  const { auth, loader } = useAxios(dispatch)
  const { push } = useHistory()

  const handleChange = e => {
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { [e.target.name]: e.target.value.trim() }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    auth(data).then(() => push('/'))
    console.log(data)
  }

  return (
    <LoginPage>
      <LoginTitle weight={300}>Вход в систему</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          <Text size="small" view="second">
            Логин :
          </Text>
          <Input
            size="large"
            placeholder="Username"
            value={data.email}
            name="email"
            onChange={handleChange}
            disabled={loader}
          />
        </label>
        <label className="password">
          <Text size="small" view="second">
            Пароль :
          </Text>
          <Input.Password
            size="large"
            placeholder="xxxxxxxx"
            value={data.password}
            name="password"
            onChange={handleChange}
            disabled={loader}
          />
        </label>
        <Button
          htmlType="submit"
          type="primary"
          block
          size="large"
          disabled={loader || (!data.email || !data.password)}
        >
          Вход в систему
        </Button>
      </LoginForm>
      <LoginLogo>
        <img src={logo} alt="logo" />
        <img src={logo_text} alt="discription logo" className="logo_text" />
      </LoginLogo>
    </LoginPage>
  )
}

const LoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${`url(${sqr_bl})`} no-repeat,
    ${`url(${sqr_gr})`} no-repeat bottom right;
  background-color: ${p => p.theme.bg.main};
  position: relative;
`

const LoginTitle = styled(Title)`
  font-size: 38px;
  line-height: 38px;
  margin-bottom: ${p => p.theme.space.xl};
  margin-top: 20vh;
`

const LoginForm = styled.form`
  min-width: 320px;

  label {
    display: block;
    width: 100%;
    margin-bottom: 10px;

    ${Text} {
      margin-bottom: ${p => p.theme.space.s};
    }

    &.password {
      margin-top: ${p => p.theme.space.l};
      margin-bottom: ${p => p.theme.space.xl};
    }
  }
`

const LoginLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 60px;
  left: 90px;
  img.logo_text {
    margin-left: 16px;
  }
`
