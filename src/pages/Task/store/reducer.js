// Task
export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADER":
      return { ...state, loader: true }
    case "GET_STATE":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
