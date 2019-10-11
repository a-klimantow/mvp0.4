export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      const currentStage = action.payload.stages.filter(
        stage => stage.status === "InProgress"
      )[0]
      console.log(currentStage)
      return {
        ...state,
        ...action.payload,
        currentStage
      }
    case "PUSH_STATE":
      return { ...state, url: `` }
    default:
      return state
  }
}
