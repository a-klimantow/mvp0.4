import React, { useContext } from "react"
import { useRouteMatch } from "react-router-dom"

import { Block, Text, CustomLink } from "../../components"
import { TasksCurrentContext } from "./context"

export const Breadcrumbs = () => {
  const { url } = useRouteMatch()
  const { state } = useContext(TasksCurrentContext)
  const { userOperatingStatus, closingTime } = state
  const path = url.split("/")[1]
  const rootLink = (
    <CustomLink type="text" to={`/${path}`}>
      Задачи /
    </CustomLink>
  )

  if (closingTime) {
    return (
      <Block m="16px 0 24px">
        {rootLink}
        <Text ml="4px">Архивные</Text>
      </Block>
    )
  }

  return (
    <Block m="16px 0 24px">
      {rootLink}
      <Text ml="4px">
        {userOperatingStatus === "Observer" ? "Наблюдаемые" : "К исполнению"}
      </Text>
      {/* )} */}
    </Block>
  )
}
