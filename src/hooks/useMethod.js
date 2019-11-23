import { useState } from "react"
import { method } from "services/api"

export const useMethod = () => {
  const [data, setState] = useState({})
  return { state }
}
