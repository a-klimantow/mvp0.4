import axios from "axios"
import { useHistory } from "react-router-dom"
import { notification } from "antd"

const responseNotification = (type, message, description) => {
  notification[type]({
    message,
    description
  })
}

const server = "staging"
 // process.env.NODE_ENV === "development"
   // ? "staging"
	//:"production"
    //: process.env.REACT_APP_ENVIRONMENT

axios.defaults.baseURL = `https://transparent-${server}.herokuapp.com/api/`
axios.defaults.headers["Content-Type"] = "application/json"

const getTokenData = () =>
  localStorage.getItem("tokenData")
    ? JSON.parse(localStorage.getItem("tokenData"))
    : { token: null }

const setTokenData = data =>
  localStorage.setItem("tokenData", JSON.stringify(data))

// hooooook
export const useAxios = () => {
  const { replace } = useHistory()
  const source = axios.CancelToken.source()

  const createHeaders = () => ({
    headers: {
      Authorization: `Bearer ${getTokenData().token}`
    },
    cancelToken: source.token
  })

  const auth = data => {
    return axios
      .post("ManagingFirmUsers/auth", data)
      .then(res => res.data.successResponse)
      .then(data => {
        const { roles, ...tokenData } = data
        localStorage.setItem("roles", JSON.stringify(roles))
        setTokenData(tokenData)
      })
      .then(() => replace("/tasks"))
      .catch(err => {
        console.log(err)
        if (err.response) {
          responseNotification(
            "error",
            "Ошибка",
            err.response.data.errorResponse.message
          )
        }
      })
  }

  const refresh = (method, ...rest) =>
    axios
      .post("ManagingFirmUsers/refreshToken", getTokenData())
      .then(res => res.data.successResponse)
      .then(setTokenData)
      .then(() => method(...rest))
      .catch(err => {
        console.log(err)
        localStorage.clear()
        replace("/login")
      })

  const logout = () =>
    axios
      .post("ManagingFirmUsers/logout", getTokenData())
      .then(() => localStorage.clear())
      .then(() => replace("/login"))

  const get = (rest = "") => {
    return axios(`${rest}`, createHeaders())
      .then(res => {
        // console.log("got data")
        return res.data.successResponse
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(err.message)
        } else {
          if (err.response) {
            if (err.response.status === 401) {
              return refresh(get, rest)
            }
            if (err.response.status !== 404) {
              responseNotification(
                "error",
                "Ошибка",
                err.response.data.errorResponse.message
              )
            }
          }
        }
      })
  }

  const post = (url, data = {}) =>
    axios
      .post(url, data, createHeaders())
      .then(res => res.data.successResponse)
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(err.message)
        } else {
          if (err.response) {
            if (err.response.status === 401) {
              return refresh(post, url, data)
            }
            responseNotification(
              "error",
              "Ошибка",
              err.response.data.errorResponse.message
            )
          }
        }
      })

  const put = (url, data = {}) =>
    axios
      .put(url, data, createHeaders())
      .then(res => res.data.successResponse)
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(err.message)
        } else {
          if (err.response) {
            if (err.response.status === 401) {
              return refresh(put, url, data)
            }
            if (err.response.status === 403) {
              responseNotification(
                "error",
                "Ошибка",
                "Не удалось сохранить данные"
              )
              return Promise.reject()
            }
            responseNotification(
              "error",
              "Ошибка",
              err.response.data.errorResponse.message
            )
          }
        }
      })

  const deleteData = url =>
    axios
      .delete(url, createHeaders())
      .then(res => res.data.successResponse)
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(err.message)
        } else {
          if (err.response) {
            if (err.response.status === 401) {
              return refresh(deleteData, url)
            }
            responseNotification(
              "error",
              "Ошибка",
              err.response.data.errorResponse.message
            )
          }
        }
      })

  return { auth, logout, get, post, source, put, deleteData }
}
