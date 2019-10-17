// TaskDetails
export const reducer = (state, action) => {
  let activeStageIndex = null
  switch (action.type) {
    case "ADD_STATE":
      const { stages } = action.payload
      console.log(action.payload)
      activeStageIndex = getActiveStage(stages)
      return {
        ...state,
        ...action.payload,
        activeStageIndex
      }
    case "PUSH_STAGE":
      activeStageIndex = getActiveStage(action.payload)
      return {
        ...state,
        stages: action.payload,
        activeStageIndex
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

const getActiveStage = arr => {
  let res = 0
  arr.forEach(item => {
    if (item.status === "InProgress") {
      res = item.number
    }
  })
  return res
}
