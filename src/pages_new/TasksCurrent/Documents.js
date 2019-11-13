import React, { useContext } from "react"

import { TasksCurrentContext } from "./context"
import { DocumentFile, Ul } from "../../components"

export const Documents = () => {
  const { state } = useContext(TasksCurrentContext)
  // console.log(state)
  if (!state.documents) return null
  const { documents } = state

  return (
    <Ul mb="24px">
      {documents.map(item => (
        <DocumentFile key={item.id} {...item} />
      ))}
    </Ul>
  )
}
