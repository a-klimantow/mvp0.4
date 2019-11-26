import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Breadcrumbs = ({ list }) => {
  if (!list) return "loading"
  return (
    <BcWrap>
      {list.map(item =>
        item.to ? (
          <Link key={item.name} to={item.to}>
            {item.name}
          </Link>
        ) : (
          <span key={item.name}>{item.name}</span>
        )
      )}
    </BcWrap>
  )
}

const BcWrap = styled.div`
  display: flex;
  margin-top: 16px;
  a {
    padding-right: 8px;
  }
  a::after {
    content: "/";
    padding-left: 8px;
  }
`
