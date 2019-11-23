import { useState, useEffect } from "react"
import { method } from "services/api"

export const useRequest = (url, { params, data, ...config }) => {
  const [success, setSuccess] = useState({})

  useEffect(() => {
    method(url, data, { params, ...config }).then(setSuccess)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return { success }
}
