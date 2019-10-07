import styled, { css } from "styled-components"
import PropTypes from "prop-types"
//
import { addTextStyle } from "../styles"

const small = css`
  font-size: 12px;
  line-height: 20px;
`

export const Text = styled.span`
  ${addTextStyle};
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  opacity: ${p => (p.view === "second" ? 0.45 : 0.75)};
  ${p => p.size === "small" && small};
`

Text.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["small"]),
  view: PropTypes.oneOf(["second"])
}
