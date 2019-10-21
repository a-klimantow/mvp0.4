// TaskDetail
export const reducer = (state, action) => {
  let currentStageIndex = null
  let currentStageAction = null
  let comments = null
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
      const { currentStage: newCurrentStage } = action.payload
      console.log(action.payload)
      currentStageIndex = newCurrentStage.number
      currentStageAction = newCurrentStage.action
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

    case "ADD_COMMENT":
      console.log(action.payload)
      return {
        ...state,
        comments: [...state.comments, action.payload],
        btnLoading: false
      }
    case "SAVE_EDIT_COMMENT":
      comments = state.comments.map(comment =>
        comment.id === action.payload.id ? action.payload : comment
      )
      return {
        ...state,
        comments
      }
    case "DELETE_COMMENT":
      comments = state.comments.filter(comment => comment.id !== action.payload)
      return {
        ...state,
        comments
      }
    case "LOADING":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
