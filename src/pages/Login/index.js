import React, { useState } from "react"
import styled from "styled-components"

import left from "img/left.svg"
import right from "img/right.svg"
import logo from "img/logo.svg"
import text from "img/text.svg"

import { Input, Label, Button } from "components"

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [loadign, setLoading] = useState(false)

  const handleChange = e => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    setData({ email: "", password: "" })
  }

  return (
    <LoginPage>
      <TitlePage as="h1" weight={300}>
        Вход в систему
      </TitlePage>
      <Form onSubmit={handleSubmit}>
        <Label label="Логин" mb="24px">
          <Input
            value={data.email}
            onChange={handleChange}
            name="email"
            type="text"
            size="big"
            placeholder="user@mail.ru"
          />
        </Label>
        <Label label="Пароль" mb="32px">
          <Input
            value={data.password}
            onChange={handleChange}
            size="big"
            name="password"
            type="password"
            placeholder="xxxxxxx"
          />
        </Label>
        <Button
          size="big"
          view="primary"
          disabled={!data.email || !data.password}
        >
          button
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
  /* border: 1px solid red; */
`
