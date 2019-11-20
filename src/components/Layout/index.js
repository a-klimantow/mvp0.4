import React from "react"
import styled from "styled-components"

export const Layout = ({ children }) => (
  <LayoutWrap>
    <aside>nav</aside>
    <main>{children}</main>
  </LayoutWrap>
)

const LayoutWrap = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    width: 208px;
  }

  main {
    flex-grow: 1;
  }
`
