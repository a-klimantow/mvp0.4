import React, { useState } from "react"
import styled, { css } from "styled-components"

import { Icon } from "components"

export const Select = ({
  size,
  data = [],
  placeholder = "helllo",
  label,
  isDropdown = true,
  getId = () => {}
}) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")

  const select = (id, name) => {
    setValue(name)
    getId(id)
  }

  const height = size === "big" ? 40 : 32
  return (
    <SelectWrap visible={visible}>
      {label && <span data-size="small">{label}</span>}
      <div className="wrapper" onClick={() => setVisible(!visible)}>
        {isDropdown && <div className="dummy" />}
        <input
          placeholder={placeholder}
          data-size={size}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Icon type="down-arrow" />
        <Ul visible={visible} size={size} h={height}>
          {data.map(item => (
            <li key={item.id} onClick={() => select(item.id, item.name)}>
              {item.name}
              {item.executingTaskCount && (
                <span>(задач в работе: {item.executingTaskCount})</span>
              )}
            </li>
          ))}
        </Ul>
      </div>
    </SelectWrap>
  )
}

const SelectWrap = styled.div`
  &,
  div.wrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  & > span {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    color: ${p => p.theme.colors.caption};
  }

  svg {
    align-self: center;
    position: absolute;
    right: 8px;
    transition: transform 0.3s ease-in-out;
    ${p =>
      p.visible &&
      css`
        transform: rotate(180deg);
      `}
  }
`

const Ul = styled.ul`
  position: absolute;
  top: ${p => p.h + 4}px;
  border-radius: 2px;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition-property: max-height, box-shadow, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  z-index: 10;

  ${p =>
    p.visible &&
    css`
      max-height: ${p => p.children.length * p.h}px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
      opacity: 1;
    `}
  li {
    display: flex;
    align-items: center;
    height: ${p => p.h}px;
    cursor: pointer;
    padding: 0 16px;

    &:hover,
    &.active {
      color: ${p => p.theme.colors.primary};
      background-color: ${p => p.theme.colors.secondary};
    }

    &:not(:last-child) {
      border-bottom: 1px solid;
      border-color: ${p => p.theme.colors.border};
    }
    & > span {
      color: ${p => p.theme.colors.caption};
      margin-left: 8px;
    }
  }
`
