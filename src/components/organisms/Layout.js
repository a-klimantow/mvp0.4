import React from "react"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
import { Layout as LayoutAnt } from "antd"
import PropTypes from "prop-types"
//
import { Logo } from "../molocules"
import { Menu } from "../organisms"

const { Sider, Content } = LayoutAnt

export const Layout = ({ children }) => {
  if (!localStorage.getItem("tokenData")) {
    return <Redirect to="/login" />
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
