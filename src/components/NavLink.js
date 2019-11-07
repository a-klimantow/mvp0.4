import React from "react"
import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const NavLink = ({ children, ...props }) => (
  <CustomLink {...props} activeClassName="active">
    {children}
  </CustomLink>
)

const CustomLink = styled(Link)`
  color: inherit;
  display: block;
  padding: 0 16px 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 0;
    height: 2px;
    background-color: ${p => p.theme.color.primary};
    transition: width 0.2s ease-in-out;
  }

  &.active {
    color: ${p => p.theme.color.primary};
    &::before {
      width: 100%;
    }
  }
`
