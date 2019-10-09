export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADER':
      return { ...state, loader: !state.loader }
    case 'CHANGE_VALUE':
      const newData = { ...state.data, ...action.payload }
      return { ...state, data: newData }
    case 'SUBMIT':
      return { ...state.data, submit: true }
    default:
      return state
  }
}
