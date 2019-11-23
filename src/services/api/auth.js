import axios from "axios"

export const auth = axios.create()

auth.defaults.baseURL = process.env.REACT_APP_BASE_URL

auth.interceptors.response.use(
  res => {
    const { data } = res
    const { successResponse } = data
    const { token, refreshToken, roles } = successResponse
    localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
    localStorage.setItem("roles", JSON.stringify(roles))
    return "/tasks?GroupType=Executing"
  },
  function(err) {
    if (err.response.status === 400)
      return Promise.reject("Неправильно введен логин или пароль")
    return Promise.reject(err)
  }
)
