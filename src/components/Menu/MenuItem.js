import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { IconNav } from "./IconNav"

export const MenuItem = ({ icon, name, isActive, to, logout, ...props }) => {
  if (logout)
    return (
      <Li>
        <span onClick={logout}>
          <IconNav type={icon} />
          {name}
        </span>
      </Li>
    )

  return (
    <Li className={isActive ? "active" : ""}>
      <Link to={{ pathname: `/${to}`, ...props }}>
        <IconNav type={icon} />
        {name}
      </Link>
    </Li>
  )
}

const Li = styled.li`
  color: ${p => p.theme.title};
  position: relative;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  & > a,
  & > span {
    display: flex;
    align-items: center;
    color: inherit;
    height: 48px;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    &:hover {
      color: ${p => p.theme.color.primary};
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: 3px;
    height: 0;
    background-color: ${p => p.theme.color.primary};
    transform: translateY(-50%);
    transition: height 0.3s ease-in-out;
  }
  &.active {
    background-color: ${p => p.theme.color.secondary};
    color: ${p => p.theme.color.primary};
    &::after {
      height: 100%;
    }
  }
`
