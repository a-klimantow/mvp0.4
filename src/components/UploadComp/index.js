import React, { forwardRef } from "react"
import styled from "styled-components"

import { Button, Icon } from "components"

export const Upload = forwardRef(({ onChange, ...props }, ref) => {
  return (
    <UploadWrap>
      <label>
        <BtnUpload {...props}>
          <Icon type="upload" />
          <span>Загрузить документ</span>
        </BtnUpload>
        <input ref={ref} type="file" onChange={onChange} />
      </label>
    </UploadWrap>
  )
})

const UploadWrap = styled.div`
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`

const BtnUpload = styled.span.attrs(p => ({
  "data-upload": true,
  "data-size": p.size
}))`
  svg {
    margin-right: 8px;
  }
`
