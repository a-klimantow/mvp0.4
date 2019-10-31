import { Link } from "react-router-dom"
import styled from "styled-components"

export const CustomLink = styled(Link)`
  color: ${p => (p.type === "text" ? p.theme.text.color.primary : "inherit")};
  &:hover {
    color: ${p => p.theme.color.primary};
    svg {
      fill: inherit;
    }
  }
`
