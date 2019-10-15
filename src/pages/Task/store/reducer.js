// Task
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return { ...state, ...action.payload }
    case "CHANGE_TAB":
      return { ...state, tabUrl: action.payload }
    default:
      return state
  }
}
