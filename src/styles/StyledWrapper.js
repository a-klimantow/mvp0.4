import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { GlobalStyles } from "./GlobalStyles"
import theme from "theme"

export const StyledWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
