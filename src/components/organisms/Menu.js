import React from "react"
import styled from "styled-components"
import { Menu as MenuAnt } from "antd"
import { useHistory } from "react-router-dom"
//
import { Icon, Text } from "../atoms"

const { SubMenu } = MenuAnt

const menuItems = [
  { path: "/", title: "Задачи", icon: "task" },
  { path: "/object", title: "Объекты", icon: "obj" },
  { path: "/owners", title: "Собственники", icon: "key" },
  {
    path: "/profile",
    title: "Профиль",
    icon: "user",
    nodes: [
      {
        path: "/settings",
        title: "Настройки"
      },
      {
        path: "/login",
        title: "Выход"
      }
    ]
  }
]

export const Menu = () => {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <MenuAnt
      onClick={e => push(e.key)}
      defaultSelectedKeys={[pathname]}
      mode="inline"
      style={{ border: "none" }}
    >
      {menuItems.map(({ nodes, path, title, icon }) =>
        !nodes ? (
          <MenuAnt.Item key={path}>
            <MenuWrap>
              <Icon type={icon} />
              <Text ml="10px">{title}</Text>
            </MenuWrap>
          </MenuAnt.Item>
        ) : (
          <SubMenu
            key={path}
            title={
              <MenuWrap>
                <Icon type={icon} />
                <Text ml="10px">{title}</Text>
              </MenuWrap>
            }
          >
            {nodes.map(({ path, title }) => (
              <MenuAnt.Item key={path}>
                <MenuWrap>
                  <Text className="m0">{title}</Text>
                </MenuWrap>
              </MenuAnt.Item>
            ))}
          </SubMenu>
        )
      )}
    </MenuAnt>
  )
}

const MenuWrap = styled.span`
  height: 100%;
  display: flex;
  align-items: center;

  ${Text} {
    color: inherit;
    opacity: 1;
    margin-left: 10px;

    &.m0 {
      margin: 0;
    }
  }
`
