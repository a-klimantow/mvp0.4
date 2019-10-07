import styled from "styled-components"
import PropTypes from "prop-types"

export const Paper = styled.div`
  background-color: #fff;
  border: ${p => p.theme.border};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.p || "24px"};
  width: ${p => p.w};
`

Paper.propTypes = {
  p: PropTypes.string,
  w: PropTypes.string
}
