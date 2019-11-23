import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { auth } from "services/api"

export const useAuth = () => {
  const { push } = useHistory()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    let mount = true
    if (data) {
      setLoading(true)
      auth
        .post("ManagingFirmUsers/auth", data)
        .then(push)
        .catch(console.log)
        .finally(() => mount && setLoading(false))
    }
    return () => (mount = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return { loading, setData }
}
