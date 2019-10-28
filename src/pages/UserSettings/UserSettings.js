import React from "react"
import styled from "styled-components"
import { Input, Button } from "antd"

import { Block, Text, Title, Paper } from "../../components"

export const UserSettings = () => {
  return (
    <>
      <Block m="16px 0 24px">
        <Text mr="4px" view="second">
          Профиль компании /
        </Text>
        <Text> Константинопольский Константин Константинович</Text>
      </Block>
      <Title weight={300} mb="24px">
        Константинопольский Константин Константинович
      </Title>
      <GridSetting>
        <div>
          <Label>Фамилия</Label>
          <Input />
        </div>
        <div>
          <Label>Имя</Label>
          <Input />
        </div>
        <div>
          <Label>Отчество</Label>
          <Input />
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
          <Label>Статус</Label>
          <Input />
        </div>
        <div>
          <Label>Контактный номер</Label>
          <Input />
        </div>
        <div>
          <Label>Адрес электронной почты (логин)</Label>
          <Input />
        </div>
        <div>
          <Label>Роль в системе</Label>
          <Input />
        </div>
        <div className="btn_group">
          <Button type="primary">Сохранить</Button>
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
  .btn_group {
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
