import React, { useState, Children, cloneElement } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
//

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
`

export const TabMenu = ({
  children = [],
  defaultActive = "",
  getActiveTab = () => {}
}) => {
  const [active, setActive] = useState(defaultActive)

  const handleClick = id => {
    getActiveTab(id)
    setActive(id)
  }

  const renderTab = Children.map(children, (tab, i) => {
    if (tab === null) return null
    return cloneElement(tab, {
      className: tab.props.id === active && "active",
      onClick: () => handleClick(tab.props.id),
      disabled: active === tab.props.id
    })
  })
  return <Tabs>{renderTab}</Tabs>
}

TabMenu.propTypes = {
  defaultActive: PropTypes.string,
  getActiveTab: PropTypes.func
}
