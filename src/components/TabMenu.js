import React, { useState, Children, cloneElement } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
//

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`

export const TabMenu = ({
  children = [],
  defaultActive = 0,
  getActiveTab = () => {}
}) => {
  const [active, setActive] = useState(defaultActive)

  const handleClick = (i, id) => {
    getActiveTab(id)
    setActive(i)
  }

  const renderTab = Children.map(children, (tab, i) =>
    cloneElement(tab, {
      className: i === active && "active",
      onClick: () => handleClick(i, tab.props.id),
      disabled: active === i
    })
  )
  return <Tabs>{renderTab}</Tabs>
}

TabMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  defaultActive: PropTypes.number,
  getActiveTab: PropTypes.func
}
