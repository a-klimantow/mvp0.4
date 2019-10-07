import React from "react"
import styled from "styled-components"
import { Input, Button } from "antd"
//
import { Title, Text } from "../../atoms"
import sqr_gr from "../../../assets/img/sqr_gr.svg"
import sqr_bl from "../../../assets/img/sqr_bl.svg"
import logo from "../../../assets/img/logo.svg"
import logoText from "../../../assets/img/logo_text.svg"

export const Login = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <LoginPage>
      <LoginTitle weight={300}>Вход в систему</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          <Text size="small" view="second">
            Логин :
          </Text>
          <Input size="large" placeholder="Username" />
        </label>
        <label className="password">
          <Text size="small" view="second">
            Пароль :
          </Text>
          <Input.Password size="large" placeholder="xxxxxxxx" />
        </label>
        <Button htmlType="submit" type="primary" block size="large">
          Вход в систему
        </Button>
      </LoginForm>
      <LoginLogo>
        <img src={logo} alt="logo" />
        <img src={logoText} alt="discription logo" className="logo_text" />
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
