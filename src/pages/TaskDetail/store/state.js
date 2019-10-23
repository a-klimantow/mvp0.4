// TaskDetail

export const initialState = {
  // server state
  id: null,
  number: null,
  name: null,
  address: null,
  perpetrator: null,
  currentStageName: null,
  creationTime: null,
  expectedCompletionTime: null,
  closingTime: null,
  isResponsible: null,
  userOperatingStatus: null,
  currentStage: {},
  device: null,
  documents: [],
  comments: [],
  stages: [],
  // page state
  btnLoading: false,
  urlPOST: '',
  urlGET: '',
  NextPerpetratorId: null,
  upload: [],
  uploadLoading: false
}
