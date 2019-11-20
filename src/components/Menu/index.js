import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Text, Icon } from "components"

export const Menu = ({ menuItems }) => (
  <Nav>
    <ul>
      {menuItems.map(({ path, icon, name, isExact, logout }) => (
        <li key={path}>
          <NavLink to={path} exact={isExact} onClick={logout}>
            <Icon type={icon} />
            <Text>{name}</Text>
          </NavLink>
        </li>
      ))}
    </ul>
  </Nav>
)

const Nav = styled.nav`
  li:last-of-type {
    margin-top: 24px;
  }
  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px;
    background-color: inherit;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    position: relative;
    cursor: pointer;

    svg {
      margin-right: 10px;
    }

    &:after {
      content: "";
      display: block;
      height: 0;
      width: 2px;
      background-color: ${p => p.theme.colors.primary};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      transition: height 0.2s ease-in-out;
    }

    &.active {
      background-color: ${p => p.theme.colors.secondary};

      &:after {
        height: 100%;
      }
    }
  }
`
