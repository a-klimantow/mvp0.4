import React from "react"
import styled from "styled-components"
import { useLocation, Redirect } from "react-router-dom"

import { Logo, Menu } from "components"

const menuItems = [
  { icon: "task", name: "Задачи", path: "/tasks", isExact: true },
  { icon: "object", name: "Объекты", path: "/objects" },
  { icon: "username", name: "Настройки", path: "/user" },
  {
    icon: "exit",
    name: "Выход",
    path: "/login",
    logout: e => {
      e.preventDefault()
    }
  }
]

export const Layout = ({ children }) => {
  const { pathname } = useLocation()
  if (pathname === "/") return <Redirect to="/tasks" />
  return (
    <LayoutWrap>
      <aside>
        <Logo />
        <Menu menuItems={menuItems} />
      </aside>
      <main>{children}</main>
    </LayoutWrap>
  )
}

const LayoutWrap = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    width: 208px;
    background-color: #fff;
  }

  main {
    flex-grow: 1;
    padding: 0 56px;
  }
`
