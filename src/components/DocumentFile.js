import React, { useContext, useState } from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router-dom"

import { User } from "./User"
import { Icon as icon } from "./Icon"
import { TimeCreate } from "./TimeCreate"
import { useAxios } from "../hooks"
import { TasksCurrentContext } from "../pages_new/TasksCurrent/context"
import { Spin } from "antd"

export const DocumentFile = ({
  id,
  name,
  url,
  uploadingTime,
  canBeEdited,
  author
}) => {
  const { url: pathname } = useRouteMatch()
  const { deleteData } = useAxios()
  const {
    state: { documents },
    updateState
  } = useContext(TasksCurrentContext)
  const [loading, setLoading] = useState(false)

  const del = () => {
    setLoading(true)
    const deletedDocList = documents.filter(doc => doc.id !== id)
    deleteData(`${pathname}/Documents/${id}`)
      .then(res => updateState({ documents: deletedDocList }))
      .finally(() => setLoading(false))
  }

  return (
    <DocumentFileWrap>
      <a href={url} className="link" target="_blank" rel="noreferrer noopener">
        <IconFile /> {name}
      </a>
      <User perpetrator={author} className="user" />
      <TimeCreate time={uploadingTime} className="time" />
      <div className="btn">
        {!canBeEdited ? null : !loading ? (
          <button onClick={del}>
            <IconDel />
          </button>
        ) : (
          <Spin size="small" />
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
    width: 18px;
    height: 18px;
    display: inherit;
    justify-content: center;
    align-items: center;

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
      color: ${p => p.theme.text.color.primary};
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
  type: "file",
  viewBox: "0 0 16 22"
})`
  height: 22px;
  margin-right: 8px;
`
const IconDel = styled(icon).attrs({
  type: "del"
})`
  color: inherit;
`
