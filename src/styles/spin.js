import { keyframes, css } from "styled-components"

const rotate = () => keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`
export const spin = () => css`
  animation-name: ${rotate};
  animation-duration: .8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`
