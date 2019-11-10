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
  { label: "Роль в системе", className: "role" },
  { label: "Введите пароль" },
  { label: "Подтвердите пароль" }
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

        {/* <div>
          <Label>Фамилия</Label>
          <Input value={state.lastName} />
        </div>
        <div>
          <Label>Имя</Label>
          <Input value={state.firstName} />
        </div>
        <div>
          <Label>Отчество</Label>
          <Input value={state.middleName} />
        </div>
        <div>
          <Label>Отдел</Label>
          <Input />
        </div>
        <div>
          <Label>Должность</Label>
          <Input />
        </div>
        <div>
          <Label>Внутренний номер сотрудника</Label>
          <Input />
        </div>
        <div>
          <Label>Адрес электронной почты (логин)</Label>
          <Input />
        </div>
        <div>
          <Label>Контактный номер</Label>
          <Input />
        </div>
        <div className="role">
          <Label>Роль в системе</Label>
          <Input />
        </div>
        <div>
          <Label>Введите пароль</Label>
          <Input.Password />
        </div>
        <div>
          <Label>Подтвердите пароль</Label>
          <Input.Password />
        </div> */}
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
