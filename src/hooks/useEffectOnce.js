import { useEffect, useRef } from "react"

export const useEffectOnce = cb => {
  const flag = useRef(false)

  useEffect(() => {
    if (!flag.current) {
      cb()
      flag.current = true
    }
  })
}
