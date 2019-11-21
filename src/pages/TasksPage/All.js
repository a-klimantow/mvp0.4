import React, { useEffect, useState } from "react"
import { Link, useLocation, Redirect } from "react-router-dom"

import { useApi } from "hooks"

export const All = () => {
  const { pathname } = useLocation()
  const { getData } = useApi()
  const [search, setSearch] = useState("Executing")
  useEffect(() => {
    getData(`Tasks?GroupType=${search}`).then(() => console.log("ok"))
    return () => console.log("unmount")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleClick = e => {
    setSearch(e.target.name)
  }
  return (
    <>
      <button onClick={handleClick} name="Executing">
        К исполнению
      </button>
      <button onClick={handleClick} name="Observing">
        Наблюдаемые
      </button>
      <button onClick={handleClick} name="Archived">
        Архивные
      </button>
    </>
  )
}
