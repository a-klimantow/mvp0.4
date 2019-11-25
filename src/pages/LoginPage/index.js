import React, { useState } from "react"
import styled from "styled-components"

import left from "img/left.svg"
import right from "img/right.svg"
import logo from "img/logo.svg"
import text from "img/text.svg"

import { Input, Label, Button } from "components"
import { useAuth } from "hooks"

export const LoginPage = () => {
  const [{ email, password }, setInput] = useState({ email: "", password: "" })
  const { loading, setData } = useAuth()

  const handleChange = e => {
    setInput({ email, password, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setData({ email, password })
  }

  return (
    <Login>
      <TitlePage as="h1" weight={300}>
        Вход в систему
      </TitlePage>
      <Form onSubmit={handleSubmit}>
        <Label label="Логин" mb="24px">
          <Input
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
            size="big"
            placeholder="user@mail.ru"
            disabled={loading}
          />
        </Label>
        <Label label="Пароль" mb="32px">
          <Input
            value={password}
            onChange={handleChange}
            size="big"
            name="password"
            type="password"
            placeholder="xxxxxxx"
            disabled={loading}
          />
        </Label>
        <Button
          size="big"
          view="primary"
          disabled={!email || !password}
          loading={loading}
          block
        >
          Войти в систему
        </Button>
      </Form>
      <LoginLogo>
        <img src={logo} alt="logo" />
        <img src={text} alt="Transparent Technology" />
      </LoginLogo>
    </Login>
  )
}

const Login = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${`url(${left})`} no-repeat,
    ${`url(${right})`} no-repeat bottom right;
  background-color: ${p => p.theme.colors.bg};
  position: relative;
`

const LoginLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 60px;
  left: 90px;
  img:first-of-type {
    margin-right: 16px;
  }
`

const TitlePage = styled.h1`
  width: 100%;
  font-weight: 300;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  margin-bottom: 32px;
  margin-top: 20vh;
  color: ${p => p.theme.colors.title};
`

const Form = styled.form`
  margin: 0 auto;
  min-width: 320px;
`