import React from "react"
import { useHistory } from "react-router-dom"

export const useListCreatorFromArr = (items, Component) => {
  const { push } = useHistory()
  if (!items) return "loading..."
  if (!items.length) return "empty"
  return (
    <ul>
      {items.map(item => {
        if (item.link)
          return (
            <Component
              key={item.id}
              onClick={() => push(item.link, item)}
              {...item}
            />
          )
        return <Component key={item.id} {...item} />
      })}
    </ul>
  )
}
