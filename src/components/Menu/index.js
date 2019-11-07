import React from "react"

import { MenuList } from "./MenuList"
import { MenuItem } from "./MenuItem"
import { SubMenu } from "./SubMenu"

export const Menu = () => {
  // console.log(localStorage)
  const isAdmin = !JSON.parse(localStorage.getItem("roles")).includes(
    "Администратор"
  )
  return (
    <MenuList>
      <MenuItem name="Задачи" icon="task" to="Tasks" />
      <MenuItem name="Объекты" icon="obj" to="Objects" admin={isAdmin} />
      <SubMenu name="Профиль" icon="user">
        <MenuItem name="Настройки" to="Settings" />
        <MenuItem name="Выход" to="Вход" />
      </SubMenu>
    </MenuList>
  )
}
