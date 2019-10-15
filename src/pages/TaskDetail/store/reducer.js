// TaskDetails
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return {
        ...state,
        ...action.payload
      }
    case "PUSH_STAGE":
      return {
        ...state,
        stages: action.payload,
        userOperatingStatus: "Observer"
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
    default:
      return state
  }
}
