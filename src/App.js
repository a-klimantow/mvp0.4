import React from "react"

import { StyledWrapper } from "styles"
import { Text } from "./components"

export const App = () => (
  <StyledWrapper>
    <Text as="h3" weight={600} icon="resource_water">
      Documents
    </Text>
    <Text icon="timer">test hello</Text>
  </StyledWrapper>
)
