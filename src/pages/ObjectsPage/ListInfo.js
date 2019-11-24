import React, { useEffect } from "react"

import { method } from "services/api"
import { useListCreator } from "hooks"

export const ListInfo = ({ data = {} }) => {
  const { state, setState, url, index, titles = [] } = data
  const list = useListCreator({ arr: titles, state })
  useEffect(() => {
    if (!index) {
      method.get(url).then(res => setState(state => ({ ...state, ...res })))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(index)
  if (!index) return <>loading...</>
  return list
}
