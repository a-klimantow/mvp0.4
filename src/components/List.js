import React from "react"

export const List = ({ data, renderItem }) => {
  if (!data) {
    return <div>loading...</div>
  }
  return <ul>{data.map(renderItem)}</ul>
}
