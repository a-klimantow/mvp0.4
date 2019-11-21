import React from "react"

export const TabBtn = ({ children, isActive, onClick }) => {
  return (
    <button className={isActive ? "active" : ""} onClick={onClick}>
      {children}
    </button>
  )
}
