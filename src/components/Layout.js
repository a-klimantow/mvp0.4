import React from "react"
import { Redirect, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Layout as LayoutAnt } from "antd"
import PropTypes from "prop-types"
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
      <Redirect to={{ pathname: "/Tasks", search: "?GroupType=Executing" }} />
    )
  }
  return (
    <LayoutAntStyle>
      <Sider theme="light" width={208}>
        <Logo />
        <Menu />
      </Sider>
      <Content style={{ padding: "0 56px" }}>{children}</Content>
    </LayoutAntStyle>
  )
}




const LayoutAntStyle = styled(LayoutAnt)`
  height: 100vh;
`

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}
