import React from "react"
import styled from "styled-components"

import left from "img/left.svg"
import right from "img/right.svg"
import logo from "img/logo.svg"
import text from "img/text.svg"

import { Input, Label } from "components"

export const Login = () => {
  // return <LoginPage>login</LoginPage>
  return (
    <LoginPage>
      <TitlePage as="h1" weight={300}>
        Вход в систему
      </TitlePage>
      <Form>
        <Label label="Логин" mb="24px">
          <Input type="text" disabled value="hello" size="big" />
        </Label>
        <Label label="Пароль" mb="32px">
          <Input size="big" type="password" placeholder="xxxxxxx" />
        </Label>
        <button>button</button>
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
