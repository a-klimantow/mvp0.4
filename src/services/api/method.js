import axios from "axios"

const setBearer = () => {
  if (localStorage.getItem("tokenData")) {
    const { token } = JSON.parse(localStorage.getItem("tokenData"))
    return `Bearer ${token}`
  }
}

export const method = axios.create()

method.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const source = axios.CancelToken.source()

const createHeaders = res => ({
  ...res,
  headers: {
    ...res.headers,
    Authorization: setBearer(),
    cancelToken: source.token
  }
})

method.interceptors.request.use(createHeaders, err => {
  console.log("from request", err)
  Promise.reject(err)
})

method.interceptors.response.use(
  res => {
    const { data } = res
    const { successResponse } = data
    return successResponse
  },
  err => {
    if (err.response.status === 401) {
      console.log("to refresh")
      // return refresh(err.config)
      return method
        .post(
          "ManagingFirmUsers/refreshToken",
          JSON.parse(localStorage.getItem("tokenData"))
        )
        .then(res => {
          const { token, refreshToken } = res
          localStorage.setItem(
            "tokenData",
            JSON.stringify({ token, refreshToken })
          )
          console.log(err.response)
          console.log("set tokenData")
        })
        .then(() => method(createHeaders(err.config)))
    }
    return Promise.reject(err)
  }
)

// const refresh = config =>
//   method
//     .post(
//       "ManagingFirmUsers/refreshToken",
//       JSON.parse(localStorage.getItem("tokenData"))
//     )
//     .then(res => {
//       const { token, refreshToken } = res
//       localStorage.set("tokenData", JSON.stringify({ token, refreshToken }))
//       console.log("update token")
//     })
//     .then(() => method(config))
