import React, { useEffect, useState } from "react"
import { Link, useLocation, Redirect } from "react-router-dom"

import { useApi } from "hooks"

export const All = () => {
  const { pathname, search } = useLocation()
  const { getData } = useApi()

  console.log("page", search)
  console.log(search)
  useEffect(() => {
    getData(`Tasks/${search}`).then(() => console.log("ok"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {}, [])

  return (
    <>
      <Link to={{ search: "GroupType=Executing" }}>archive</Link>
      <Link to={{ search: "GroupType=Observing" }}>execute</Link>
      <Link to={{ search: "GroupType=Archived" }}>fuck</Link>
    </>
  )
}
