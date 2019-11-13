import React, { Children, cloneElement, useState } from "react"
import styled, { css } from "styled-components"
import { useLocation } from "react-router-dom"
import { IconNav } from "./IconNav"
import { Icon } from "../Icon"

export const SubMenu = ({ children, name, icon, ...props }) => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const renderItems = Children.map(children, item => {
    const isActive = pathname.split("/").includes(item.props.to)
    return cloneElement(item, { isActive })
  })

  return (
    <Li>
      <div onClick={toggle}>
        <IconNav type={icon} />
        {name}
        <IconArrow open={open} />
      </div>
      <Ul open={open}>{renderItems}</Ul>
    </Li>
  )
}

const IconArrow = styled(Icon).attrs({
  type: "down"
})`
  position: absolute;
  right: 16px;
  transition: transform 0.5s;
  ${p =>
    p.open &&
    css`
      transform: rotate(-180deg);
    `}
`

const Li = styled.li`
  color: ${p => p.theme.title};
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    color: inherit;
    height: 48px;
    font-size: 14px;
    line-height: 22px;
    position: relative;
    cursor: pointer;
    &:hover {
      color: ${p => p.theme.color.primary};
    }
  }
`

const Ul = styled.ul`
  overflow: hidden;
  max-height: 0;
  transition: all 0.3s ease-in-out;

  ${p =>
    p.open &&
    css`
      max-height: ${p => p.children.length * 48}px;
    `}
`
