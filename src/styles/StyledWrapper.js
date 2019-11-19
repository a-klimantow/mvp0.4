import React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "./GlobalStyles"

export const StyledWrapper = ({ children }) => (
  <ThemeProvider theme={{ color: "red" }}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
