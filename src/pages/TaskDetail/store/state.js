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
  documents: null,
  comments: [],
  stages: [],
  // page state
  currentStageIndex: 0,
  currentStageAction: null,
  btnLoading: false,
  urlPOST: '',
  urlGET: '',
  NextPerpetratorId: null
}
