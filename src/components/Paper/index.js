import styled from "styled-components"
import { margin } from "styles"

export const Paper = styled.div`
  ${margin};
  border-radius: 4px;
  border: 1px solid;
  border-color: ${p => p.theme.colors.border};
  padding: 24px;
  background-color: #fff;
`
