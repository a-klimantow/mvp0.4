import React, { useContext } from "react"
import styled from "styled-components"
import { Spin } from "antd"
import { Link } from "react-router-dom"

import { Block, Text } from "../../components"
import { Context } from "./context"

export const Breadcrumbs = ({ url }) => {
  const { state } = useContext(Context)

  const path = url.split("/")[1]
  return (
    <Block m="16px 0 24px">
      <LinkTo to={`/${path}`}>Задачи /</LinkTo>
      {state && (
        <Text ml="4px">
          {state.userOperatingStatus === "Executor" ? (
            "К исполнению"
          ) : state.userOperatingStatus === "Observer" ? (
            "Наблюдаемые"
          ) : state.closingTime ? (
            "Архивные"
          ) : (
            <Spin size="small" />
          )}
        </Text>
      )}
    </Block>
  )
}

const LinkTo = styled(Link)`
  cursor: pointer;
  color: ${p => p.theme.text.color.primary};
  &:hover {
    color: ${p => p.theme.color.primary};
  }
`
