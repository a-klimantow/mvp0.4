import React, { useContext, useEffect } from "react"

import { CurrentTaskPageContext } from "context"
import { Select } from "components"
import { method } from "services/api"

export const SelectWithQuery = ({ url, watch, ...props }) => {
  const { state, updateState } = useContext(CurrentTaskPageContext)
  useEffect(() => {
    if (!!state[watch]) {
      method.get(url).then(data => updateState({ [watch]: data }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Select size="big"  {...props} data={state[watch]}/>
}
