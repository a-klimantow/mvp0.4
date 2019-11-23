import { useEffect, useState } from "react"

import { method } from "services/api"

export const useGetAllTasks = (url, config) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    method(url, { ...config })
      .then(setState)
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { state, loading }
}
