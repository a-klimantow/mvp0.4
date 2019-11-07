import React, { Children, cloneElement } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

export const MenuList = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <Nav>
      <ul>
        {Children.map(children, item => {
          if (item.props.admin) return null
          return cloneElement(item, {
            isActive: pathname.split("/").includes(item.props.to)
          })
        })}
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`