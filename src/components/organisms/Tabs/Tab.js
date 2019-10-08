import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
//

const TabEl = styled.button`
  padding: 0 18px;
  min-height: 32px;
  position: relative;
  border: none;
  background-color: transparent;
  outline-color: ${p => p.theme.color.primary};
  transition: all 0.2s;
  color: rgba(39, 47, 90, 0.65);
  &:hover,
  &:focus {
    color: ${p => p.theme.color.primary};
  }
  &:active {
    outline: none;
  }
  &::before {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${p => p.theme.color.primary};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s;
  }
  &:not(.active) {
    cursor: pointer;
  }
  &.active {
    color: ${p => p.theme.color.primary};
    transition: all 0.2s;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${p => p.theme.color.primary};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.2s;
    }
  }
`

export const Tab = ({ title, ...props }) => <TabEl {...props}>{title}</TabEl>

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
