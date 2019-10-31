import React from "react"
import styled from "styled-components"
import { Menu as MenuAnt } from "antd"
import { useHistory, Link } from "react-router-dom"
//
import { Icon } from "../Icon"
import { Text } from "../Text"
import { useAxios } from "../../hooks"
// import { Ul } from "../Ul"
// import { MenuList } from "./MenuList"
// import { MenuItem } from "./MenuItem"
// import { SubMenu } from "./SubMenu"

const { SubMenu } = MenuAnt

const menuItems = [
  { path: "/Tasks", title: "Задачи", icon: "task" },
  { path: "/HousingStocks", title: "Объекты", icon: "obj" },
  // { path: "/owners", title: "Собственники", icon: "key" },
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
  const { logout } = useAxios()

  const roles = JSON.parse(localStorage.getItem("roles"))

  const menuAdminValid = roles.includes("Администратор")
    ? menuItems
    : menuItems.filter(item => item.title !== "Жилой фонд")

  const {
    push,
    location: { pathname }
  } = useHistory()

  const handleClick = e => {
    if (e.key !== "/login") {
      push(e.key)
    } else {
      logout()
    }
  }

  return (
    <MenuAnt
      onClick={handleClick}
      defaultSelectedKeys={[pathname]}
      mode="inline"
      style={{ border: "none" }}
    >
      {menuAdminValid.map(({ nodes, path, title, icon }) =>
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

// export const Menu = () => {
//   return (
//     <MenuList>
//       <MenuItem
//         name="Задачи"
//         icon="task"
//         to="tasks"
//         search="?GroupType=Archived"
//       />
//       <MenuItem name="Жилищный Фонд" icon="obj" to="housingstocks" admin />
//       <SubMenu name="Профиль" icon="user">
//         <MenuItem name="Настройки" to="Setting" />
//         <MenuItem name="Выход" to="Login" />
//       </SubMenu>
//       <MenuItem name="Жилищный Фонд" icon="obj" to="housingstocks" admin />

//     </MenuList>
//   )
// }
