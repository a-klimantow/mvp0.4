import React from "react"
import { Redirect, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Layout as LayoutAnt } from "antd"
//
import { Logo } from "./Logo"
import { Menu } from "./Menu"

const { Sider, Content } = LayoutAnt

export const Layout = ({ children }) => {
  
  const { pathname } = useLocation()

  if (!localStorage.getItem("tokenData")) {
    return <Redirect to="/login" />
  }

  if (pathname === "/") {
    return (
      <Redirect to='/tasks' />
    )
  }
  return (
    <LayoutAntStyle>
      <Sider theme="light" width={208}>
        <Logo />
        <Menu />
      </Sider>
      <Content style={{ overflowY: "scroll" }}>
        <ContentSection id="content">{children}</ContentSection>
      </Content>
    </LayoutAntStyle>
  )
}

const LayoutAntStyle = styled(LayoutAnt)`
  height: 100vh;
`
const ContentSection = styled.section`
  padding: 0 46px 0 56px;
  position: relative;
`
