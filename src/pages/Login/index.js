import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "antd"

import { logo, sqr_bl, sqr_gr, logo_text } from "../../assets/img"
import { Title, Input } from "../../components"

import { useAxios } from "../../hooks"

export const Login = () => {
  const { auth } = useAxios()
  const [loading, setLoadign] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    let mount = true
    if (data) {
      setLoadign(true)
      auth(data).finally(() => {
        if (mount) {
          setLoadign(false)
        }
      })
    }
    return () => (mount = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const submit = e => {
    e.preventDefault()
    setData({ email, password })
  }

  return (
    <LoginWrap>
      <TitleLogin>Вход в систему</TitleLogin>
      <Form onSubmit={submit}>
        <Input
          label="Логин:"
          size="large"
          mb="24px"
          disabled={loading}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="Пароль:"
          size="large"
          mb="32px"
          password
          disabled={loading}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          size="large"
          type="primary"
          block
          htmlType="submit"
          loading={loading}
          disabled={!email && !password}
        >
          Вход в систему
        </Button>
      </Form>
      <LoginLogo>
        <img src={logo} alt="logo" />
        <img src={logo_text} alt="discription logo" className="logo_text" />
      </LoginLogo>
    </LoginWrap>
  )
}

const LoginWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${`url(${sqr_bl})`} no-repeat,
    ${`url(${sqr_gr})`} no-repeat bottom right;
  background-color: ${p => p.theme.bg.main};
  position: relative;
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

const TitleLogin = styled(Title).attrs({
  weight: 300
})`
  font-size: 38px;
  line-height: 46px;
  margin-bottom: ${p => p.theme.space.xl};
  margin-top: 20vh;
`

const Form = styled.form`
  width: 320px;
`
