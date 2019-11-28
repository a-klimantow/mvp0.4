import React from "react"
import styled from "styled-components"
import { useLocation, Redirect } from "react-router-dom"

import { Logo, Menu } from "components"

const menuItems = [
  {
    icon: "task",
    name: "Задачи",
    path: "/tasks"
  },
  { icon: "object", name: "Объекты", path: "/objects" },
  { icon: "username", name: "Настройки", path: "/user" },
  {
    icon: "exit",
    name: "Выход",
    path: "/login",
    logout: e => {
      // e.preventDefault()
    }
  }
]

export const Layout = ({ children }) => {
  const { pathname } = useLocation()
  if (pathname === "/") return <Redirect to="/tasks" />

  return (
    <LayoutWrap>
      <Aside>
        <Logo />
        <Menu menuItems={menuItems} />
      </Aside>
      <Main>{children}</Main>
    </LayoutWrap>
  )
}

const LayoutWrap = styled.div`
  display: grid;
  grid-template-columns: 208px 1fr;
  grid-template-rows: 100vh;
`

const Aside = styled.aside`
  background-color: #fff;
  overflow: hidden;
`

const Main = styled.main`
  padding: 0 56px;
  overflow-y: scroll;
  display: grid;
  grid-gap: 24px;
  align-content: start;
`
