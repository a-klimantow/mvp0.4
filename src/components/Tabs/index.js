import React, { Children } from "react"
import styled from "styled-components"

export const Tabs = ({ children }) => {
  return <TabsPanel>{Children.map(children, item => item)}</TabsPanel>
}

const TabsPanel = styled.div`
  display: flex;
  border-bottom: ${p => p.theme.border};
  color: ${p => p.theme.text.color.primary};
  margin-bottom: 24px;
`
