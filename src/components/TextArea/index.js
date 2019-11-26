import React, { useState, forwardRef } from "react"
import styled from "styled-components"
import { size } from "styles"

export const TextArea = forwardRef((props, ref) => {
  const [rows, setRows] = useState(1)
  const autoResize = e => {
    if (e.key === "Enter") {
      rows < 5 && setRows(rows + 1)
    }
  }
  return (
    <TextAreaWrap onKeyPress={autoResize} rows={rows} ref={ref} {...props} />
  )
})

const TextAreaWrap = styled.textarea.attrs(p => ({
  rows: p.rows || 2,
  sentences: true,
  wrap: "soft",
  cols: 30
}))`
  ${size};
  width: 100%;
  resize: vertical;
`
