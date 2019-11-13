import React, { useEffect, useState } from "react"

import { useAxios } from "../../hooks"
import { Title, Paper, TabMenu, Tab } from "../../components"
import { GeneralInfo } from "./GeneralInfo"
import { Users } from "./Users"

export const CompanySettings = () => {
  const { get } = useAxios()
  const [tab, setTab] = useState("info")
  const [state, setState] = useState({})
  const { users } = state
  const updateState = data => setState(state => ({ ...state, ...data }))
  const { name, phoneNumber } = state
  console.log(state)
  useEffect(() => {
    if (!name) {
      get("ManagingFirms/current").then(updateState)
    }

    if (tab === "users" && !users) {
      get("ManagingFirmUsers").then(data => updateState({ users: data }))
    }
  }, [tab])

  return (
    <>
      <Title weight={300} m="24px 0">
        Профиль компании
      </Title>
      <Paper>
        <TabMenu defaultActive={tab} getActiveTab={tab => setTab(tab)}>
          <Tab title="Общие данные" id="info" />
          <Tab title="Сотрудники" id="users" />
          <Tab title="Подрядчики" id="contractors" />
        </TabMenu>
        {tab === "info" && (
          <GeneralInfo name={name} phoneNumber={phoneNumber} />
        )}
        {tab === "users" && <Users users={users} />}
      </Paper>
    </>
  )
}
