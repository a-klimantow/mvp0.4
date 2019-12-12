import React from "react"

import { MenuList } from "./MenuList"
import { MenuItem } from "./MenuItem"
import { SubMenu } from "./SubMenu"
import { useAxios } from "../../hooks"

export const Menu = () => {
  const { logout } = useAxios()
  const userRole = JSON.parse(localStorage.getItem("roles")).includes(
    "ManagingFirmAdministrator"
  )
  // console.log(isAdmin)

  return (
    <MenuList>
      <MenuItem
        name="Задачи"
        icon="task"
        to="tasks"
        // search="?GroupType=Archived"
      />
      <MenuItem name="Объект" icon="obj" to="objects" admin={!userRole} />
      <MenuItem
        name="Профиль компании"
        icon="company"
        to="company"
        admin={!userRole}
      />
      <SubMenu name="Профиль" icon="user">
        <MenuItem name="Настройки" to="user" />
        <MenuItem name="Выход" logout={() => logout()} />
      </SubMenu>
      {/* <MenuItem name="Жилищный Фонд" icon="obj" to="housingstocks"/> */}
    </MenuList>
  )
}
