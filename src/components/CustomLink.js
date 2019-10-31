import { Link } from "react-router-dom"
import styled from "styled-components"

export const CustomLink = styled(Link)`
  color: inherit;
  &:hover {
    color: ${p => p.theme.color.primary};
    svg {
      fill: inherit;
    }
  }
`
