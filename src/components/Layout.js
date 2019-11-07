import React from "react"
import styled from "styled-components"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <aside>
        <Logo />
        <Menu />
      </aside>
      <main>{children}</main>
    </LayoutWrap>
  )
}

const LayoutWrap = styled.div`
  display: flex;
  height: 100vh;
  /* aside,
  main {
    border: 1px solid red;
  } */
  aside {
    width: 208px;
  }
  main {
    flex-grow: 1;
    padding: 0 56px;
    background: ${p => p.theme.bg.main};
  }
`
