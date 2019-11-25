import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { method } from "services/api"
import { useListCreator } from "hooks"

export const ListInfo = ({ data = {} }) => {
  const location = useLocation()
  const { state = {}, setState, url, index, titles = [] } = data
  const list = useListCreator({ arr: titles, state })
  console.log(state)
  useEffect(() => {
    setState({ ...state, ...location.state })
    if (!index) {
      method.get(url).then(res => setState(state => ({ ...state, ...res })))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!index) return <>loading...</>
  return list
}
