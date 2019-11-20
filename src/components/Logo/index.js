import React from "react"
import styled from "styled-components"

import logo from "img/logo.svg"

export const Logo = () => (
  <LogoWrap>
    <img src={logo} alt="logo" />
    <span className="tt">TT</span>
    <span>Managment</span>
  </LogoWrap>
)

const LogoWrap = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  img {
    margin-left: -30px;
  }
  span {
    font-size: 16px;
    font-weight: 300;
    color: ${p => p.theme.colors.title};
    &.tt {
      font-weight: 400;
      margin: 0 4px 0 11px;
    }
  }
`
