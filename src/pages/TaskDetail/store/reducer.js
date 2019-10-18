// TaskDetail
export const reducer = (state, action) => {
  let currentStageIndex = null
  let currentStageAction = null
  switch (action.type) {
    case "CHANGE_URL_GET":
      return {
        ...state,
        urlGET: action.payload
      }

    case "ADD_STATE":
      const { currentStage } = action.payload
      currentStageIndex = currentStage.number
      currentStageAction = currentStage.action
      return {
        ...state,
        ...action.payload,
        currentStageIndex,
        currentStageAction
      }
    case "PUSH_STAGE":
      const { stages: newStages } = action.payload
      currentStageIndex = getCurrentStageIndex(newStages)
      currentStageAction = getCurrentStageAction(newStages)
      console.log(currentStageAction)
      return {
        ...state,
        ...action.payload,
        currentStageIndex,
        currentStageAction
      }
    case "ADD_EMPLOYEES":
      const employeesList = action.payload.map(item => ({
        key: item.id.toString(),
        label: item.name
      }))
      return { ...state, employees: employeesList }
    case "SET_NEXT_PERPETRATOR_ID":
      return {
        ...state,
        NextPerpetratorId: action.payload
      }
    case "SHOW_MODAL":
      return { ...state, modal: !state.modal }
    default:
      return state
  }
}

const getCurrentStageIndex = arr => {
  let res = 0
  arr.forEach(item => {
    if (item.status === "InProgress") {
      res = item.number
    }
  })
  return res
}

const getCurrentStageAction = arr => {
  let res = ""
  arr.forEach(item => {
    console.log(item)
    if (item.status === "InProgress") {
      res = item.action
    }
  })
  return res
}
