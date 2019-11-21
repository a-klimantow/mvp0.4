import React, { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom"

import { useApi } from "hooks"
import { TabMenu } from "components"

export const All = () => {
  const { getData } = useApi()
  const [search, setSearch] = useState("Executing")
  const [state, setState] = useState({})

  useEffect(() => {
    getData(`Tasks?GroupType=${search}`).then(setState)
    return () => console.log("unmount")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleClick = e => {
    setSearch(e.target.getAttribute("data-name"))
  }

  const toggleActiveClass = name => (search === name ? "active" : "")

  console.log(state)

  return (
    <>
      <TabMenu>
        <button
          onClick={handleClick}
          data-name="Executing"
          className={toggleActiveClass("Executing")}
        >
          К исполнению
        </button>
        <button
          onClick={handleClick}
          data-name="Observing"
          className={toggleActiveClass("Observing")}
        >
          Наблюдаемые
        </button>
        <button
          onClick={handleClick}
          data-name="Archived"
          className={toggleActiveClass("Archived")}
        >
          Архивные
        </button>
      </TabMenu>
      {state.items && state.items.map(item => <div>1</div>)}
    </>
  )
}
