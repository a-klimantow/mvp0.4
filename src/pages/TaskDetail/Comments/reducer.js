export const reducer = (state, action) => {
  let comments
  switch (action.type) {
    case "LOAD_COMMENT":
      return { ...state, comments: action.payload }
    case "INPUT_COMMENT":
      return { ...state, value: action.payload }
    case "CREATE_COMMENT":
      const comment = {
        id: Date.now(),
        value: state.value.trim(),
        author: "Вы",
        datetime: Date.now(),
        editor: false
      }
      return { ...state, comments: [...state.comments, comment], value: "" }
    case "DELETE_COMMENT":
      comments = state.comments.filter(item => item.id !== action.payload)
      return { ...state, comments }
    case "EDIT_START":
      let editValue
      comments = state.comments.map(item => {
        if (item.id === action.payload) {
          editValue = item.value
          return { ...item, editor: true }
        }
        return { ...item, editor: false }
      })
      return { ...state, comments, editValue }
    case "CHANGE_EDIT_VALUE":
      return { ...state, editValue: action.payload }
    case "CONFIRM_EDIT_VALUE":
      comments = state.comments.map(item =>
        item.id === action.payload
          ? { ...item, value: state.editValue, editor: false }
          : item
      )
      return { ...state, comments }
    case "CANCEL_EDIT_VALUE":
      const cancelList = state.comments.map(item => ({
        ...item,
        editor: false
      }))
      return { ...state, comments: cancelList }
    default:
      return state
  }
}
