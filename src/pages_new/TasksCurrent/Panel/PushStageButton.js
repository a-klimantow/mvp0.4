import React, { useContext, useState } from "react"
import { Button } from "antd"
import { useRouteMatch } from "react-router-dom"
import PropTypes from "prop-types"

import { TasksCurrentContext } from "../context"
import { useAxios } from "../../../hooks"

export const PushStateButton = ({ data = {}, disabled }) => {
  const { updateState } = useContext(TasksCurrentContext)
  const { url } = useRouteMatch()
  const { post } = useAxios()
  const [loading, setLoading] = useState(false)

  const pushStage = () => {
    setLoading(true)
    post(`${url}/PushStage`, data)
      .then(updateState)
      .finally(() => setLoading(false))
  }

  return (
    <Button
      size="large"
      type="primary"
      onClick={pushStage}
      loading={loading}
      disabled={disabled}
    >
      Завершить этап
    </Button>
  )
}

PushStateButton.propTypes = {
  disabled: PropTypes.bool,
  data: PropTypes.any.isRequired
}

PushStateButton.defaultProps = {
  data: {}
}
