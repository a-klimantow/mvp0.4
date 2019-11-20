import React, { useState, useEffect } from "react"
import styled from "styled-components"

import left from "img/left.svg"
import right from "img/right.svg"
import logo from "img/logo.svg"
import text from "img/text.svg"

import { Input, Label, Button } from "components"
import { useApi } from "hooks"

export const Login = () => {
  const { auth } = useApi()
  const [{ email, password }, setInput] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    let mount = true
    if (data) {
      setLoading(true)
      auth(data).finally(() => mount && setLoading(false))
    }
    return () => (mount = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleChange = e => {
    setInput({ email, password, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setData({ email, password })
  }

  return (
    <LoginPage>
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
        >
          Войти в систему
        </Button>
      </Form>
      <LoginLogo>
        <img src={logo} alt="logo" />
        <img src={text} alt="Transparent Technology" />
      </LoginLogo>
    </LoginPage>
  )
}

const LoginPage = styled.main`
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
