import styled from "styled-components"
import t from "prop-types"

export const Text = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: ${p => p.weight};
  color: ${p => p.theme.colors[p.color] || "inherit"};

  span.number,
  span.timer {
    margin-left: 4px;
  }
  span.number {
    color: ${p => p.theme.colors["caption"]};
  }

  svg {
    margin-right: 6px;
  }
`

Text.propTypes = {
  children: t.any,
  size: t.oneOf(["small", "normal"]),
  weight: t.oneOf([300, 400, 600]),
  color: t.oneOf(["caption", "body"])
}

Text.defaultProps = {
  weight: 400,
  size: "normal",
  color: "body"
}
