import React, { useContext } from "react"
import { Spin } from "antd"

import { Block, Text, CustomLink } from "../../components"
import { Context } from "./context"

export const Breadcrumbs = ({ url }) => {
  const { state } = useContext(Context)
  const path = url.split("/")[1]
  return (
    <Block m="16px 0 24px">
      <CustomLink type="text" to={`/${path}`}>
        Задачи /
      </CustomLink>
      {state && (
        <Text ml="4px">
          {state.closingTime ? (
            "Архивные"
          ) : state.userOperatingStatus === "Observer" ? (
            "Наблюдаемые"
          ) : state.userOperatingStatus === "Executor" ? (
            "К исполнению"
          ) : (
            <Spin size="small" />
          )}
        </Text>
      )}
    </Block>
  )
}

