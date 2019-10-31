import React, { Children, cloneElement, useState } from "react"
import styled, { css } from "styled-components"
import { useLocation } from "react-router-dom"
import { IconNav } from "./IconNav"
import { Icon } from "../Icon"

export const SubMenu = ({ children, name, icon, ...props }) => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <Li>
      <div onClick={toggle}>
        <IconNav type={icon} />
        {name}
        <IconArrow open={open} />
      </div>
      <ul className={open ? "open" : ""}>
        {Children.map(children, item =>
          cloneElement(item, {
            isActive: pathname.split("/").includes(item.props.to)
          })
        )}
      </ul>
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
      transform: rotateX(180deg);
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
    &:hover {
      color: ${p => p.theme.color.primary};
    }
  }

  ul {
    overflow: hidden;
    height: 0;
    transition: heigth 0.3s ease-in-out;
  }

  ul.open {
    height: auto;
    transition: heigth 0.3s ease-in-out;
  }
`
