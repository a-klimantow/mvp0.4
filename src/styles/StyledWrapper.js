import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { GlobalStyles } from "./GlobalStyles"

export const StyledWrapper = ({ children }) => (
  <ThemeProvider theme={{ color: "red" }}>
    <Normalize />
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
