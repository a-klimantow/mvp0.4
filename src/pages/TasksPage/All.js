import React from "react"

import { Paper, Title } from "components"
import { AllTabMenu } from "./AllTabMenu"
import { AllTasksList } from "./AllTasksList"

export const All = () => (
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
