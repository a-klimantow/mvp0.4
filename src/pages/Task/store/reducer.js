// Task
export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADER":
      return { ...state, loader: true }
    case "ADD_STATE":
      return { ...state, ...action.payload, loader: false }
    case "CHANGE_TAB":
      return { ...state, urlGET: action.payload }
    default:
      return state
  }
}
