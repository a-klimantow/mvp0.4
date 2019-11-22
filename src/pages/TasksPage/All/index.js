import React, { useEffect } from "react"

import { useApi } from "hooks"
import { Paper, Title } from "components"
import { useTasksPageContext } from "../useTasksPageContext"
import { AllTabMenu } from "./AllTabMenu"
import { AllTasksList } from "./AllTasksList"

export const All = () => {
  const { state, updateState } = useTasksPageContext()
  const { getData } = useApi()

  const { search } = state

  useEffect(() => {
    let mount = true
    getData(`Tasks?GroupType=${search}`).then(res => {
      if (mount) {
        const items = res.items.map(item => ({
          ...item,
          url: `/tasks/${item.id}`
        }))
        updateState({ ...res, items })
      }
    })
    return () => (mount = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <>
      <Title weight={300} mt="24px" mb="24px">
        Задачи
      </Title>
      <Paper>
        <AllTabMenu />
        <AllTasksList />
      </Paper>
    </>
  )
}
