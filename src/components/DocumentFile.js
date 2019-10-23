import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

import { User } from './User'
import { Icon as icon } from './Icon'
import { TimeCreate } from './TimeCreate'

export const DocumentFile = ({ name, url, uploadingTime, canBeEdited }) => {
  return (
    <DocumentFileWrap>
      <a href={url} className="link">
        <IconFile /> {name}
      </a>
      <User perpetrator="user" className="user" />
      <TimeCreate time={uploadingTime} className="time" />
      <div className="btn">
        {canBeEdited && (
          <button>
            <IconDel />
          </button>
        )}
      </div>
    </DocumentFileWrap>
  )
}

const DocumentFileWrap = styled.li`
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  .link {
    display: inherit;
    align-items: inherit;
    flex-grow: 1;
  }

  .user,
  .time {
    min-width: 200px;
  }

  .btn {
    min-width: 16px;

    button {
      outline: none;
      border: none;
      background-color: transparent;
      padding: 1px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      margin: 4px;
      cursor: pointer;
      transition: color 0.5s;

      &:hover,
      &:focus,
      &:active {
        color: ${p => p.theme.color.error};
      }
    }
  }
`

const IconFile = styled(icon).attrs({
  type: 'file',
  viewBox: '0 0 16 22'
})`
  height: 22px;
  margin-right: 8px;
`
const IconDel = styled(icon).attrs({
  type: 'del'
})`
  color: ${p => p.theme.text.color.primary};
`
