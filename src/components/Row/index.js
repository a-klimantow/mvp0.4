import styled from "styled-components"

import { margin } from "styles"

export const Row = styled.div.attrs(p => ({ "data-element-row": true }))`
  ${margin};
  width: 100%;
  display: flex;
  align-items: center;
`
