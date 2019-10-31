import React, { useContext } from "react"

import { Context } from "./context"
import { DocumentFile, Ul } from "../../components"

export const Documents = () => {
  const { state } = useContext(Context)
  const { documents } = state

  if (!documents) return null
  return (
    <Ul mb="24px">
      {documents.map(item => (
        <DocumentFile key={item.id} {...item} />
      ))}
    </Ul>
  )
}
