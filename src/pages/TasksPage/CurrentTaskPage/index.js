import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

import { method } from "services/api"
import { Row, Paper, Block, Breadcrumbs } from "components"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { Comments } from "./Comments"
import { CurrentTaskPageContext } from "context"

const getBc = () => "bc"
const initialState = {
  users: [],
  contractors: [],
  documentsIds: [],
  files: [],
  nextStages: [],
  postData: null,
  comment: {}
}

export const CurrentTaskPage = () => {
  const location = useLocation()
  const params = useParams()
  const [state, setState] = useState({
    ...initialState,
    ...location.state,
    currnetStage: { name: location.state.currnetStageName || null },
    params
  })
  const { postData, comment } = state

  useEffect(() => {
    method(`Tasks/${params.taskId}`).then(updateState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(state)
  useEffect(() => {
    if (postData) {
      updateState({ loading: true })
      method
        .post(`Tasks/${params.taskId}/PushStage`, postData)
        .then(updateState)
        .finally(() => updateState({ loading: false, postData: null }))
    }

    return () => console.log("u")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData])

  useEffect(() => {
    if (!!comment.value) {
      method
        .put(
          `Tasks/${params.taskId}/Comments/${comment.id}`,
          JSON.stringify(comment.value)
        )
        .then(comments => updateState({ comments, comment: {} }))
    }

    if (!!comment.add) {
      method
        .post(`Tasks/${params.taskId}/Comments`, JSON.stringify(comment.add))
        .then(comments => updateState({ comments, comment: {} }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment])

  const updateState = data => setState(state => ({ ...state, ...data }))

  const breadcrumbs = [{ name: "Задачи", to: "/tasks" }, { name: getBc() }]

  return (
    <CurrentTaskPageContext.Provider value={{ state, updateState }}>
      <Breadcrumbs list={breadcrumbs} />
      <Header state={state} />
      <Panel state={state} />
      <Row grid="8fr 4fr" gapCol={24}>
        <Block gap={24}>
          <Comments
            comments={state.comments}
            create={add => updateState({ comment: { add } })}
            edit={(value, id) => updateState({ comment: { value, id } })}
            addLoading={!!comment.add}
            editLoading={!!comment.value}
          />
          <Paper>list</Paper>
        </Block>

        <Paper />
      </Row>
    </CurrentTaskPageContext.Provider>
  )
}
