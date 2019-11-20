import React from "react"
import styled from "styled-components"

import { Logo } from "components"

export const Layout = ({ children }) => (
  <LayoutWrap>
    <aside>
      <Logo />
      menu
    </aside>
    <main>{children}</main>
  </LayoutWrap>
)

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
