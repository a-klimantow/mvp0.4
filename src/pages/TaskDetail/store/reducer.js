/* eslint-disable no-unused-vars */
// TaskDetail
export const reducer = (state, action) => {
  let upload
  switch (action.type) {
    case "CHANGE_URL_GET":
      return {
        ...state,
        urlGET: action.payload
      }

    case "ADD_STATE":
      console.log("state", action.payload)
      return {
        ...state,
        ...action.payload
      }
    case "PUSH_STAGE":
      console.log("push", action.payload)
      return {
        ...state,
        ...action.payload,
        btnLoading: false,
        upload: []
      }
    case "SET_NEXT_PERPETRATOR_ID":
      return {
        ...state,
        NextPerpetratorId: action.payload
      }
    case "SHOW_MODAL":
      return { ...state, modal: !state.modal }

    case "ADD_COMMENT":
      return {
        ...state,
        comments: action.payload,
        btnLoading: false
      }
    case "SAVE_EDIT_COMMENT":
      console.log(action.payload)
      return {
        ...state,
        comments: action.payload
      }
    case "DELETE_COMMENT":
      console.log(action.payload)
      return {
        ...state,
        comments: action.payload
      }
    case "ADD_UPLOAD_FILE":
      return {
        ...state,
        upload: [...state.upload, ...action.payload],
        uploadLoading: false
      }
    case "DELETE_UPLOAD_FILE":
      upload = state.upload.filter(file => file.id !== action.payload.id)
      return {
        ...state,
        upload: []
      }
    case "LOADING":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
