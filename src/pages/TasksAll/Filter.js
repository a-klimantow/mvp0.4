import React from "react"
import styled from "styled-components"
import { Input } from "antd"

export const Filter = () => {
  return (
    <FilterWrap>
      <div>
        <Input.Search placeholder="Введите номер задачи или адрес" />
      </div>
      <div>1</div>
    </FilterWrap>
  )
}

const FilterWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  div {
    width: 50%;
  }
  div:last-of-type {
    text-align: right;
  }
`
