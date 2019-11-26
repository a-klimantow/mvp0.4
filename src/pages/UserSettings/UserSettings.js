import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"

import { Block, Text, Title, Paper } from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"

const settingPageElements = [
  { label: "Фамилия", value: "lastName" },
  { label: "Имя", value: "firstName" },
  { label: "Отчество", value: "middleName" },
  { label: "Отдел", value: "department" },
  { label: "Должность", value: "position" },
  { label: "Внутренний номер сотрудника", value: "number " },
  { label: "Адрес электронной почты (логин)", value: "email" },
  { label: "Контактный номер", value: "cellphone" },
  { label: "Роль в системе", className: "role", admin: true },
  { label: "Введите пароль", admin: true },
  { label: "Подтвердите пароль", admin: true }
]

export const UserSettings = () => {
  const { get, put } = useAxios()
  const [state, setState] = useState({})
  const [disabled, setDisabled] = useState(true)
  const [putData, setPutData] = useState({})
  const [loading, setLoadign] = useState(false)
  // console.log(state)
  useEffectOnce(() => {
    get("ManagingFirmUsers/current").then(setState)
  })

  const isAdmin =
    JSON.parse(localStorage.getItem("roles"))[0] === "Администратор"

  console.log(isAdmin)

  useEffect(() => {
    const { id, ...data } = putData
    if (putData.id) {
      put(`ManagingFirmUsers/${id}`, data)
        .then(data => {
          setState(data)
        })
        .finally(() => {
          setDisabled(true)
          setLoadign(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [putData])

  const inputHandleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
    if (disabled) {
      setDisabled(false)
    }
  }

  const handleClick = () => {
    setPutData(state)
    setLoadign(true)
  }

  const renderItems = isAdmin ? (
    <>
      {settingPageElements.map((el, i) => (
        <div key={i} className={el.className}>
          <Label>{el.label}</Label>
          <Input
            value={state[el.value]}
            name={el.value}
            onChange={inputHandleChange}
          />
        </div>
      ))}
      <div className="btn_group">
        <Button
          type="primary"
          disabled={disabled}
          onClick={handleClick}
          loading={loading}
        >
          Сохранить
        </Button>
        <Button>Отмена</Button>
      </div>
    </>
  ) : (
    settingPageElements.map((el, i) => {
      if (el.admin) return null
      return (
        <div key={i} className={el.className}>
          <Label>{el.label}</Label>
          <Input
            value={state[el.value]}
            name={el.value}
            onChange={inputHandleChange}
            disabled
          />
        </div>
      )
    })
  )

  return (
    <>
      <Block m="16px 0 24px">
        <Text mr="4px" view="second">
          Профиль компании /
        </Text>
        <Text>
          {state.lastName} {state.firstName} {state.middleName}
        </Text>
      </Block>
      <Title weight={300} mb="24px">
        {state.lastName} {state.firstName} {state.middleName}
      </Title>
      <GridSetting>
        {renderItems}
        {/* <div className="btn_group">
          <Button
            type="primary"
            disabled={disabled}
            onClick={handleClick}
            loading={loading}
          >
            Сохранить
          </Button>
          <Button>Отмена</Button>
        </div> */}
      </GridSetting>
    </>
  )
}

const GridSetting = styled(Paper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  .btn_group,
  .role {
    grid-column: 1 / -1;
    & > * {
      margin-right: 16px;
    }
  }
`
const Label = styled(Text).attrs({
  size: "small"
})`
  margin-bottom: 8px;
`
