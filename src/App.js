import React from "react"

import { StyledWrapper } from "styles"
import { Text } from "./components"

export const App = () => (
  <StyledWrapper>
    <Text as="h1" weight={600}>
      test hello
    </Text>
    <Text weight={300} >test hello</Text>
    <Text size="small">test hello</Text>
  </StyledWrapper>
)
