import styled from "styled-components"

export const Paper = styled.div`
  background-color: #fff;
  border: ${p => p.theme.border};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.p || "24px"};
  width: ${p => p.w};
`
